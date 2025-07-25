"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const zod_1 = require("../zod");
const auth_1 = __importDefault(require("../middleware/auth"));
const zod_2 = require("zod");
const router = (0, express_1.Router)();
const idParamSchema = zod_2.z.object({ id: zod_2.z.string().min(1, 'ID obrigatório') });
// Listar todos os pedidos (MELHORADA - apenas pedidos com itens)
router.get('/', auth_1.default, async (req, res) => {
    try {
        const pedidos = await prisma_1.default.orders.findMany({
            where: {
                order_items: {
                    some: {} // Só retorna pedidos que têm pelo menos 1 item
                }
            },
            include: {
                order_items: {
                    include: {
                        products: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                price: true,
                                image: true,
                                images: true
                            }
                        }
                    }
                },
                customers: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true
                    }
                },
                stores: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        // Log para debug
        console.log(`📊 Retornando ${pedidos.length} pedidos para o frontend`);
        console.log(`🔍 Primeiro pedido tem ${pedidos[0]?.order_items?.length || 0} itens`);
        res.json(pedidos);
    }
    catch (error) {
        console.error('❌ Erro ao buscar pedidos:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Buscar pedido por ID
router.get('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        const pedido = await prisma_1.default.orders.findUnique({
            where: { id: req.params.id },
            include: {
                order_items: {
                    include: {
                        products: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                price: true,
                                image: true,
                                images: true,
                                stock: true
                            }
                        }
                    }
                },
                customers: true,
                stores: true
            }
        });
        if (!pedido)
            return res.status(404).json({ error: 'Pedido não encontrado' });
        res.json(pedido);
    }
    catch (error) {
        console.error('❌ Erro ao buscar pedido:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Criar pedido
router.post('/', async (req, res) => {
    const parse = zod_1.ordersCreateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const novo = await prisma_1.default.orders.create({ data: parse.data });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar pedido', details: e });
    }
});
// Atualizar pedido
router.put('/:id', auth_1.default, async (req, res) => {
    const parseParams = idParamSchema.safeParse(req.params);
    if (!parseParams.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parseParams.error.issues });
    }
    const parseBody = zod_1.ordersUpdateInputSchema.safeParse(req.body);
    if (!parseBody.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
    }
    try {
        const atualizado = await prisma_1.default.orders.update({
            where: { id: req.params.id },
            data: parseBody.data,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar pedido', details: e });
    }
});
// Deletar pedido
router.delete('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        await prisma_1.default.orders.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar pedido', details: e });
    }
});
exports.default = router;
