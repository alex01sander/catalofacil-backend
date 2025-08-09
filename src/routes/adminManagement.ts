import * as express from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Prisma } from '@prisma/client';
import prisma from '../lib/prisma';

const router = express.Router();

// Interfaces para tipos seguros
interface SafeUser {
    id: string;
    email: string;
    role: string;
    created_at?: Date | null;
    updated_at?: Date | null;
}

interface SafeDomain {
    id: string;
    domain: string;
    user_id: string;
    user_email: string | null;
    created_at: Date | null;
}

// Middleware para verificar se é admin - VERSÃO CORRIGIDA usando apenas Prisma
const requireAdmin = async (req: any, res: any, next: any) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'Token de autenticação necessário' });
        }
        
        console.log('🔑 Token recebido (primeiros 20 chars):', token.substring(0, 20));
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
        console.log('🔍 Token decodificado completo:', decoded);
        
        // Usar apenas Prisma para consistência - Priorizar decoded.id
        const userId = decoded.id || decoded.userId;
        if (!userId) {
            console.error('❌ ID do usuário não encontrado no token:', decoded);
            return res.status(401).json({ error: 'Token inválido: ID do usuário não encontrado' });
        }
        
        console.log('🔍 Buscando usuário com ID:', userId);
        const user = await prisma.users.findFirst({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                role: true
            }
        });
        
        if (!user || !user.email) {
            console.error('❌ Usuário não encontrado:', { userId });
            return res.status(401).json({ error: 'Usuário não encontrado ou email inválido' });
        }
        
        console.log('✅ Usuário encontrado:', { id: user.id, email: user.email, role: user.role });
        
        // Verificar se é admin - melhorada a verificação
        let isAdmin = false;
        
        // Verifica role diretamente
        if (user.role === 'admin') {
            console.log('✅ Usuário é admin por role');
            isAdmin = true;
        } else {
            // Verifica tabela de admins se existir
            try {
                console.log('🔍 Verificando se usuário está na tabela controller_admins');
                const adminRecord = await prisma.controller_admins.findFirst({
                    where: { user_id: user.id }
                });
                if (adminRecord) {
                    console.log('✅ Usuário é admin por controller_admins');
                    isAdmin = true;
                } else {
                    console.log('❌ Usuário não encontrado na tabela controller_admins');
                }
            } catch (error) {
                // Se a tabela controller_admins não existir, ignora este erro
                console.warn('⚠️ Tabela controller_admins não encontrada ou inacessível:', error);
            }
        }
        
        if (!isAdmin) {
            console.error('❌ Acesso negado para usuário não-admin:', { id: user.id, email: user.email });
            return res.status(403).json({ error: 'Acesso negado. Apenas administradores.' });
        }
        
        console.log('✅ Autenticação admin bem-sucedida para:', { id: user.id, email: user.email });
        req.user = user;
        next();
    } catch (error) {
        console.error('❌ Erro na autenticação admin:', error);
        return res.status(401).json({ error: 'Token inválido' });
    }
};

// ROTA GET /admin-management/stats - Estatísticas gerais - REFATORADA para usar Prisma
router.get('/stats', requireAdmin, async (req, res) => {
    try {
        // Usar Prisma em vez de conexão direta para consistência
        const [totalUsers, totalDomains, totalStores, totalProducts] = await Promise.all([
            prisma.users.count(),
            prisma.domain_owners.count(),
            prisma.stores.count(),
            prisma.products.count()
        ]);
        
        res.json({
            stats: {
                totalUsers,
                totalDomains,
                totalStores,
                totalProducts
            },
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Erro ao buscar estatísticas:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA GET /admin-management/users - Listar usuários - REFATORADA para usar Prisma
router.get('/users', requireAdmin, async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '' } = req.query;
        const pageNum = Number(page);
        const limitNum = Number(limit);
        const skip = (pageNum - 1) * limitNum;
        
        // Condições de filtro para Prisma
        const whereCondition = search ? {
            OR: [
                { email: { contains: search as string, mode: 'insensitive' as Prisma.QueryMode } },
                { id: { contains: search as string, mode: 'insensitive' as Prisma.QueryMode } }
            ]
        } : {};
        
        const [users, total] = await Promise.all([
            prisma.users.findMany({
                where: whereCondition,
                select: {
                    id: true,
                    email: true,
                    role: true,
                    created_at: true,
                    updated_at: true
                },
                orderBy: { created_at: 'desc' },
                skip: skip,
                take: limitNum
            }),
            prisma.users.count({ where: whereCondition })
        ]);
        
        // Filtrar campos null para compatibilidade
        const sanitizedUsers: SafeUser[] = users.map(user => ({
            id: user.id,
            email: user.email || '',
            role: user.role || 'user',
            created_at: user.created_at,
            updated_at: user.updated_at
        }));
        
        res.json({
            users: sanitizedUsers,
            pagination: {
                page: pageNum,
                limit: limitNum,
                total,
                pages: Math.ceil(total / limitNum)
            }
        });
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA POST /admin-management/users - Criar usuário - REFATORADA para usar Prisma
router.post('/users', requireAdmin, async (req, res) => {
    try {
        const { email, password, role = 'user' } = req.body;
        
        // Verificar se email já existe
        const existingUser = await prisma.users.findFirst({
            where: { email }
        });
        
        if (existingUser) {
            return res.status(400).json({ error: 'Email já cadastrado' });
        }
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }
        
        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Criar usuário usando Prisma
        const user = await prisma.users.create({
            data: {
                id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, // Gerar ID único
                email,
                encrypted_password: hashedPassword,
                role,
                created_at: new Date(),
                updated_at: new Date()
            },
            select: {
                id: true,
                email: true,
                role: true,
                created_at: true
            }
        });
        
        res.status(201).json({
            user,
            message: 'Usuário criado com sucesso'
        });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA PUT /admin-management/users/:id - Atualizar usuário - REFATORADA para usar Prisma
router.put('/users/:id', requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { email, role } = req.body;
        
        if (!email || !role) {
            return res.status(400).json({ error: 'Email e role são obrigatórios' });
        }
        
        const user = await prisma.users.updateMany({
            where: { id },
            data: {
                email,
                role,
                updated_at: new Date()
            }
        });
        
        if (user.count === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        
        // Buscar o usuário atualizado para retornar
        const updatedUser = await prisma.users.findFirst({
            where: { id },
            select: {
                id: true,
                email: true,
                role: true,
                updated_at: true
            }
        });
        
        res.json({
            user: {
                id: updatedUser?.id || id,
                email: updatedUser?.email || email,
                role: updatedUser?.role || role,
                updated_at: updatedUser?.updated_at || new Date()
            } as SafeUser,
            message: 'Usuário atualizado com sucesso'
        });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA DELETE /admin-management/users/:id - Deletar usuário - REFATORADA para usar Prisma
router.delete('/users/:id', requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedUser = await prisma.users.deleteMany({
            where: { id }
        });
        
        if (deletedUser.count === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA GET /admin-management/domains - Listar domínios - VERSÃO COMPATÍVEL
router.get('/domains', requireAdmin, async (req, res) => {
    try {
        // Tentar primeiro com include, se falhar usar join manual
        let domains;
        let mappedDomains;
        
        try {
            domains = await prisma.domain_owners.findMany({
                include: {
                    users: {
                        select: {
                            email: true
                        }
                    }
                },
                orderBy: { created_at: 'desc' }
            });
            
            mappedDomains = domains.map(domain => ({
                id: domain.id,
                domain: domain.domain || '',
                user_id: domain.user_id || '',
                user_email: domain.users?.email || null,
                created_at: domain.created_at
            }));
        } catch (includeError) {
            // Se o include falhar, fazer join manual
            console.warn('Include falhou, usando busca manual:', includeError);
            
            domains = await prisma.domain_owners.findMany({
                orderBy: { created_at: 'desc' }
            });
            
            // Buscar emails dos usuários manualmente
            const userIds = domains.map(d => d.user_id).filter(Boolean);
            const users = await prisma.users.findMany({
                where: {
                    id: { in: userIds }
                },
                select: {
                    id: true,
                    email: true
                }
            });
            
            // Criar um mapa de user_id -> email (filtrando nulls)
            const userEmailMap = users.reduce((acc, user) => {
                if (user.email) {
                    acc[user.id] = user.email;
                }
                return acc;
            }, {} as Record<string, string>);
            
            mappedDomains = domains.map(domain => ({
                id: domain.id,
                domain: domain.domain || '',
                user_id: domain.user_id || '',
                user_email: userEmailMap[domain.user_id] || null,
                created_at: domain.created_at
            }));
        }
        
        res.json({
            domains: mappedDomains,
            total: mappedDomains.length
        });
    } catch (error) {
        console.error('Erro ao listar domínios:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA POST /admin-management/domains - Criar domínio - REFATORADA para usar Prisma
router.post('/domains', requireAdmin, async (req, res) => {
    try {
        const { domain, user_id } = req.body;
        
        if (!domain || !user_id) {
            return res.status(400).json({ error: 'Domínio e user_id são obrigatórios' });
        }
        
        // Verificar se domínio já existe
        const existingDomain = await prisma.domain_owners.findFirst({
            where: { domain }
        });
        
        if (existingDomain) {
            return res.status(400).json({ error: 'Domínio já cadastrado' });
        }
        
        // Verificar se usuário existe
        const existingUser = await prisma.users.findFirst({
            where: { id: user_id }
        });
        
        if (!existingUser) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }
        
        // Criar domínio
        const newDomain = await prisma.domain_owners.create({
            data: {
                id: `domain_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, // Gerar ID único
                domain,
                user_id,
                created_at: new Date(),
                updated_at: new Date(),
                domain_type: 'manual' // Valor padrão se o campo for obrigatório
            }
        });
        
        res.status(201).json({
            domain: newDomain,
            message: 'Domínio criado com sucesso'
        });
    } catch (error) {
        console.error('Erro ao criar domínio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA DELETE /admin-management/domains/:id - Deletar domínio - REFATORADA para usar Prisma
router.delete('/domains/:id', requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedDomain = await prisma.domain_owners.deleteMany({
            where: { id }
        });
        
        if (deletedDomain.count === 0) {
            return res.status(404).json({ error: 'Domínio não encontrado' });
        }
        
        res.json({ message: 'Domínio deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar domínio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router;