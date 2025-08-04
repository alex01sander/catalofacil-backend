"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/products.ts
const express_1 = require("express");
const auth_1 = __importDefault(require("../middleware/auth"));
const rateLimiter_1 = require("../middleware/rateLimiter");
const pagination_1 = require("../middleware/pagination");
const cache_1 = require("../lib/cache");
const zod_1 = require("zod");
const prisma_1 = __importDefault(require("../lib/prisma"));
const supabase_1 = __importDefault(require("../lib/supabase"));
const multer = require('multer');
const router = (0, express_1.Router)();
const idParamSchema = zod_1.z.object({ id: zod_1.z.string().min(1, 'ID obrigatório') });
// Configuração do multer para upload
const upload = multer({
    storage: multer.memoryStorage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limite
    }
});
// Validar configuração do Supabase
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
    console.error('⚠️ AVISO: Variáveis SUPABASE_URL ou SUPABASE_SERVICE_KEY não configuradas');
}
// Criar produto com upload de imagem
router.post('/', auth_1.default, rateLimiter_1.uploadRateLimit, upload.single('image'), async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        let imageUrl = null;
        console.log('=== DEBUG UPLOAD IMAGEM ===');
        console.log('Arquivo recebido via multer:', !!req.file);
        console.log('Campo image no body:', !!req.body.image);
        console.log('Campo images no body:', req.body.images);
        console.log('Tipo do campo images:', typeof req.body.images);
        // Se não há arquivo no multer mas há URL no body, usar essa URL
        if (!req.file && req.body.image) {
            console.log('Usando imagem do body (já enviada):', req.body.image);
            imageUrl = req.body.image;
        }
        else if (!req.file && req.body.images && Array.isArray(req.body.images) && req.body.images.length > 0) {
            console.log('Usando primeira imagem do array images:', req.body.images[0]);
            imageUrl = req.body.images[0];
        }
        if (req.file) {
            console.log('Detalhes do arquivo:', {
                originalname: req.file.originalname,
                mimetype: req.file.mimetype,
                size: req.file.size
            });
            // Verificar configuração Supabase
            if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
                console.error('ERRO: Variáveis Supabase não configuradas');
                return res.status(500).json({
                    error: 'Configuração de upload não encontrada',
                    details: {
                        hasUrl: !!process.env.SUPABASE_URL,
                        hasKey: !!process.env.SUPABASE_SERVICE_KEY
                    }
                });
            }
            // Upload para Supabase
            const fileExt = req.file.originalname.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
            console.log('Fazendo upload do arquivo:', fileName);
            console.log('Bucket: products');
            const { data, error } = await supabase_1.default.storage
                .from('products')
                .upload(fileName, req.file.buffer, {
                contentType: req.file.mimetype,
                upsert: false
            });
            if (error) {
                console.error('Erro no upload Supabase:', error);
                return res.status(500).json({
                    error: 'Erro ao fazer upload da imagem',
                    details: error.message,
                    supabaseInfo: {
                        bucket: 'products',
                        fileName: fileName,
                        fileSize: req.file.size
                    }
                });
            }
            console.log('Upload bem-sucedido:', data);
            // Gerar URL pública
            const { data: urlData } = supabase_1.default.storage
                .from('products')
                .getPublicUrl(fileName);
            imageUrl = urlData.publicUrl;
            console.log('URL da imagem gerada:', imageUrl);
            // Verificar se a URL está válida
            if (!imageUrl || !imageUrl.startsWith('http')) {
                console.error('URL inválida gerada:', imageUrl);
                return res.status(500).json({
                    error: 'URL de imagem inválida',
                    details: { generatedUrl: imageUrl }
                });
            }
        }
        else {
            console.log('Nenhum arquivo de imagem enviado');
        }
        console.log('Dados recebidos para criação:', req.body);
        console.log('ImageUrl final:', imageUrl);
        // Mapear categoria corretamente
        let categoryId = null;
        if (req.body.category_id)
            categoryId = req.body.category_id;
        else if (req.body.category)
            categoryId = req.body.category;
        else if (req.body.categoryId)
            categoryId = req.body.categoryId;
        console.log('Categoria mapeada:', {
            original_category: req.body.category,
            original_category_id: req.body.category_id,
            original_categoryId: req.body.categoryId,
            mapped_categoryId: categoryId
        });
        // Mapear store_id corretamente  
        let storeId = null;
        if (req.body.store_id)
            storeId = req.body.store_id;
        else if (req.body.storeId)
            storeId = req.body.storeId;
        console.log('Store mapeado:', {
            original_store_id: req.body.store_id,
            original_storeId: req.body.storeId,
            mapped_storeId: storeId
        });
        const product = await prisma_1.default.products.create({
            data: {
                name: req.body.name,
                price: parseFloat(req.body.price) || 0,
                stock: parseInt(req.body.stock) || 0,
                is_active: req.body.isActive !== undefined ? req.body.isActive : true,
                user_id: req.user.id,
                category_id: categoryId,
                description: req.body.description || null,
                image: imageUrl,
                // images: imageUrl ? JSON.stringify([imageUrl]) : "[]", // Temporariamente removido para testes
                store_id: storeId,
                created_at: new Date(),
                updated_at: new Date()
            },
            include: {
                categories: {
                    select: {
                        id: true,
                        name: true,
                        color: true
                    }
                }
            }
        });
        console.log('✅ Produto criado:', product.name);
        // Limpar cache do usuário após criar produto
        (0, cache_1.clearUserCache)(req.user.id);
        res.status(201).json({
            success: true,
            data: product
        });
    }
    catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).json({ error: 'Erro interno do servidor', details: error });
    }
});
// Listar produtos do usuário com cache e paginação
router.get('/', auth_1.default, rateLimiter_1.userRateLimit, pagination_1.paginationMiddleware, pagination_1.paginationHeaders, (0, cache_1.cacheMiddleware)(180, (req) => (0, cache_1.generateCacheKey)('products', req.user.id, {
    page: req.pagination?.page,
    limit: req.pagination?.limit,
    sortBy: req.pagination?.sortBy,
    sortOrder: req.pagination?.sortOrder,
    search: req.query.search,
    category: req.query.category,
    active: req.query.active
})), async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        // Construir filtros
        const where = { user_id: req.user.id };
        // Filtro por busca de texto
        if (req.query.search) {
            where.OR = [
                { name: { contains: req.query.search, mode: 'insensitive' } },
                { description: { contains: req.query.search, mode: 'insensitive' } }
            ];
        }
        // Filtro por categoria
        if (req.query.category) {
            where.category_id = req.query.category;
        }
        // Filtro por status ativo
        if (req.query.active !== undefined) {
            where.is_active = req.query.active === 'true';
        }
        // Query com paginação
        const paginationQuery = (0, pagination_1.getPrismaQuery)(req.pagination, 'created_at');
        // Buscar produtos e contagem total em paralelo
        const [products, totalCount] = await Promise.all([
            prisma_1.default.products.findMany({
                where,
                include: {
                    categories: {
                        select: {
                            id: true,
                            name: true,
                            color: true
                        }
                    }
                },
                ...paginationQuery
            }),
            prisma_1.default.products.count({ where })
        ]);
        const response = (0, pagination_1.createPaginatedResponse)(products, totalCount, req.pagination);
        res.json({
            success: true,
            data: response.data,
            pagination: response.pagination
        });
    }
    catch (error) {
        console.error('Erro ao listar produtos:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Buscar produto por ID
router.get('/:id', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        const product = await prisma_1.default.products.findUnique({
            where: { id: req.params.id },
            include: {
                categories: {
                    select: {
                        id: true,
                        name: true,
                        color: true
                    }
                }
            }
        });
        if (!product) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        // Verificar se o produto pertence ao usuário
        if (product.user_id !== req.user.id) {
            return res.status(403).json({ error: 'Acesso negado' });
        }
        res.json({
            success: true,
            data: product
        });
    }
    catch (error) {
        console.error('Erro ao buscar produto:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Atualizar produto
router.put('/:id', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        // Verifica se o produto pertence ao usuário
        const existingProduct = await prisma_1.default.products.findUnique({
            where: { id: req.params.id },
            select: { user_id: true }
        });
        if (!existingProduct) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        if (existingProduct.user_id !== req.user.id) {
            return res.status(403).json({ error: 'Acesso negado' });
        }
        // Prepara os dados para atualização com mapeamento correto
        const updateData = {
            updated_at: new Date()
        };
        // Mapear todos os campos possíveis do frontend
        if (req.body.name !== undefined)
            updateData.name = req.body.name;
        if (req.body.price !== undefined)
            updateData.price = parseFloat(req.body.price);
        if (req.body.stock !== undefined)
            updateData.stock = parseInt(req.body.stock);
        if (req.body.description !== undefined)
            updateData.description = req.body.description;
        // Categoria pode vir como 'category', 'category_id' ou 'categoryId'
        if (req.body.category !== undefined)
            updateData.category_id = req.body.category || null;
        if (req.body.category_id !== undefined)
            updateData.category_id = req.body.category_id || null;
        if (req.body.categoryId !== undefined)
            updateData.category_id = req.body.categoryId || null;
        // Status ativo pode vir como 'isActive' ou 'is_active'
        if (req.body.isActive !== undefined)
            updateData.is_active = req.body.isActive;
        if (req.body.is_active !== undefined)
            updateData.is_active = req.body.is_active;
        // Imagens
        if (req.body.image !== undefined)
            updateData.image = req.body.image;
        if (req.body.images !== undefined)
            updateData.images = req.body.images;
        console.log('Dados recebidos para atualização:', req.body);
        console.log('Dados que serão atualizados:', updateData);
        const product = await prisma_1.default.products.update({
            where: { id: req.params.id },
            data: updateData,
            include: {
                categories: {
                    select: {
                        id: true,
                        name: true,
                        color: true
                    }
                }
            }
        });
        console.log('✅ Produto atualizado:', product.name);
        // Limpar cache do usuário após atualizar produto
        (0, cache_1.clearUserCache)(req.user.id);
        res.json({
            success: true,
            data: product
        });
    }
    catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).json({ error: 'Erro interno do servidor', details: error });
    }
});
// Deletar produto
router.delete('/:id', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        // Verificar se o produto pertence ao usuário antes de deletar
        const existingProduct = await prisma_1.default.products.findUnique({
            where: { id: req.params.id },
            select: { user_id: true, name: true }
        });
        if (!existingProduct) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        if (existingProduct.user_id !== req.user.id) {
            return res.status(403).json({ error: 'Acesso negado' });
        }
        await prisma_1.default.products.delete({
            where: { id: req.params.id }
        });
        console.log('✅ Produto deletado:', existingProduct.name);
        // Limpar cache do usuário após deletar produto
        (0, cache_1.clearUserCache)(req.user.id);
        res.status(200).json({
            success: true,
            message: 'Produto excluído com sucesso'
        });
    }
    catch (error) {
        console.error('Erro ao deletar produto:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Rota temporária para corrigir produtos sem store_id
router.post('/fix-store-id', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        // Buscar a loja "catalofacil" - assumindo que é esta loja
        const loja = await prisma_1.default.stores.findUnique({
            where: { slug: 'catalofacil' },
            select: { id: true, name: true }
        });
        if (!loja) {
            return res.status(404).json({ error: 'Loja catalofacil não encontrada' });
        }
        console.log('Loja encontrada:', loja);
        // Buscar produtos sem store_id do usuário atual
        const produtosSemStore = await prisma_1.default.products.findMany({
            where: {
                user_id: req.user.id,
                store_id: null
            },
            select: { id: true, name: true, user_id: true, store_id: true }
        });
        console.log('Produtos sem store_id encontrados:', produtosSemStore);
        if (produtosSemStore.length === 0) {
            return res.json({
                message: 'Nenhum produto sem store_id encontrado',
                loja_id: loja.id
            });
        }
        // Atualizar produtos para incluir o store_id
        const resultado = await prisma_1.default.products.updateMany({
            where: {
                user_id: req.user.id,
                store_id: null
            },
            data: {
                store_id: loja.id
            }
        });
        console.log('Produtos atualizados:', resultado);
        res.json({
            message: `${resultado.count} produtos foram corrigidos com store_id`,
            loja_id: loja.id,
            loja_nome: loja.name,
            produtos_corrigidos: produtosSemStore.length
        });
    }
    catch (error) {
        console.error('Erro ao corrigir store_id:', error);
        res.status(500).json({ error: 'Erro interno do servidor', details: error });
    }
});
// Rota para testar upload de imagem isoladamente
router.post('/test-upload', auth_1.default, upload.single('image'), async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Nenhuma imagem enviada' });
        }
        console.log('=== TESTE DE UPLOAD ===');
        console.log('Arquivo recebido:', {
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size
        });
        // Verificar configuração Supabase
        if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
            return res.status(500).json({
                error: 'Configuração Supabase não encontrada',
                details: {
                    hasUrl: !!process.env.SUPABASE_URL,
                    hasKey: !!process.env.SUPABASE_SERVICE_KEY
                }
            });
        }
        const fileExt = req.file.originalname.split('.').pop();
        const fileName = `test-${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
        console.log('Fazendo upload:', fileName);
        const { data, error } = await supabase_1.default.storage
            .from('products')
            .upload(fileName, req.file.buffer, {
            contentType: req.file.mimetype,
            upsert: false
        });
        if (error) {
            console.error('Erro no upload:', error);
            return res.status(500).json({
                error: 'Erro ao fazer upload',
                details: error,
                supabaseConfig: {
                    url: process.env.SUPABASE_URL?.substring(0, 20) + '...',
                    hasKey: !!process.env.SUPABASE_SERVICE_KEY
                }
            });
        }
        // Gerar URL pública
        const { data: urlData } = supabase_1.default.storage
            .from('products')
            .getPublicUrl(fileName);
        console.log('Upload bem-sucedido:', {
            path: data.path,
            publicUrl: urlData.publicUrl
        });
        res.json({
            success: true,
            fileName: fileName,
            path: data.path,
            publicUrl: urlData.publicUrl,
            uploadData: data
        });
    }
    catch (error) {
        console.error('Erro no teste de upload:', error);
        res.status(500).json({
            error: 'Erro interno no teste de upload',
            details: error.message
        });
    }
});
exports.default = router;
