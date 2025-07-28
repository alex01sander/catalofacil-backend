"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const zod_1 = require("zod");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
const slugParamSchema = zod_1.z.object({ slug: zod_1.z.string().min(1, 'Slug obrigatório') });
// Rota protegida: consulta completa (exemplo, pode ser removida se não quiser mais expor nada)
router.get('/:slug', auth_1.default, async (req, res) => {
    const parse = slugParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const { slug } = req.params;
    // Aqui você pode customizar o que retorna para o admin
    const loja = await prisma_1.default.stores.findUnique({ where: { slug } });
    if (!loja)
        return res.status(404).json({ error: 'Loja não encontrada' });
    res.json(loja);
});
// Rota pública: só dados públicos da loja
router.get('/public/:slug', async (req, res) => {
    const parse = slugParamSchema.safeParse({ slug: req.params.slug });
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const { slug } = req.params;
    console.log('=== DEBUG CONFIGURAÇÕES LOJA ===');
    console.log('Slug solicitado:', slug);
    const loja = await prisma_1.default.stores.findUnique({
        where: { slug },
        select: {
            id: true,
            name: true,
            description: true,
            logo_url: true,
            banner_url: true,
            whatsapp_number: true,
            instagram_url: true,
            theme_color: true,
            user_id: true // Incluir user_id para buscar configurações
        }
    });
    if (!loja)
        return res.status(404).json({ error: 'Loja não encontrada' });
    console.log('Dados da loja (stores):', loja);
    // Buscar configurações do admin (store_settings)
    const configuracoes = await prisma_1.default.store_settings.findUnique({
        where: { user_id: loja.user_id },
        select: {
            store_name: true,
            store_description: true,
            store_subtitle: true,
            instagram_url: true,
            whatsapp_number: true,
            mobile_logo: true,
            desktop_banner: true,
            mobile_banner_image: true,
            mobile_banner_color: true
        }
    });
    console.log('Configurações do admin (store_settings):', configuracoes);
    // Mesclar dados: prioridade para configurações do admin
    const dadosFinais = {
        id: loja.id,
        name: configuracoes?.store_name || loja.name,
        description: configuracoes?.store_description || loja.description,
        subtitle: configuracoes?.store_subtitle || null,
        logo_url: configuracoes?.mobile_logo || loja.logo_url,
        banner_url: configuracoes?.desktop_banner || configuracoes?.mobile_banner_image || loja.banner_url,
        banner_color: configuracoes?.mobile_banner_color || null,
        whatsapp_number: configuracoes?.whatsapp_number || loja.whatsapp_number,
        instagram_url: configuracoes?.instagram_url || loja.instagram_url,
        theme_color: loja.theme_color
    };
    console.log('Dados finais mesclados:', dadosFinais);
    res.json(dadosFinais);
});
// Rota pública: produtos disponíveis para compra
router.get('/public/:slug/products', async (req, res) => {
    const parse = slugParamSchema.safeParse({ slug: req.params.slug });
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const { slug } = req.params;
    console.log('=== DEBUG VITRINE PÚBLICA ===');
    console.log('Slug solicitado:', slug);
    // Busca a loja pelo slug
    const loja = await prisma_1.default.stores.findUnique({ where: { slug }, select: { id: true } });
    console.log('Loja encontrada:', loja);
    if (!loja)
        return res.status(404).json({ error: 'Loja não encontrada' });
    // Debug: ver todos os produtos dessa loja (ativos e inativos)
    const todosProdutos = await prisma_1.default.products.findMany({
        where: { store_id: loja.id },
        select: { id: true, name: true, is_active: true, store_id: true }
    });
    console.log('Todos os produtos da loja:', todosProdutos);
    // Debug: ver produtos sem store_id
    const produtosSemStore = await prisma_1.default.products.findMany({
        where: { store_id: null },
        select: { id: true, name: true, is_active: true, store_id: true }
    });
    console.log('Produtos sem store_id:', produtosSemStore);
    // Busca produtos ativos dessa loja com dados da categoria
    const produtos = await prisma_1.default.products.findMany({
        where: {
            store_id: loja.id,
            is_active: true
        },
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            stock: true,
            is_active: true,
            image: true,
            images: true,
            categories: {
                select: {
                    id: true,
                    name: true
                }
            }
            // Adicione outros campos públicos se necessário
        }
    });
    console.log('Produtos ativos encontrados para vitrine:', produtos.length);
    console.log('Lista de produtos:', produtos.map(p => ({ id: p.id, name: p.name, store_id: p.categories })));
    res.json(produtos);
});
// Rota pública: categorias disponíveis para compra
router.get('/public/:slug/categories', async (req, res) => {
    const parse = slugParamSchema.safeParse({ slug: req.params.slug });
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const { slug } = req.params;
    // Busca a loja pelo slug
    const loja = await prisma_1.default.stores.findUnique({ where: { slug }, select: { id: true } });
    if (!loja)
        return res.status(404).json({ error: 'Loja não encontrada' });
    // Busca categorias dessa loja
    const categorias = await prisma_1.default.categories.findMany({
        where: { store_id: loja.id },
        select: {
            id: true,
            name: true,
            color: true,
            image: true,
            // Adicione outros campos públicos se necessário
        }
    });
    res.json(categorias);
});
// Rota pública: buscar produto individual por ID
router.get('/public/:slug/products/:id', async (req, res) => {
    const parse = slugParamSchema.safeParse({ slug: req.params.slug });
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const { slug } = req.params;
    const { id } = req.params;
    console.log('=== DEBUG PRODUTO INDIVIDUAL PÚBLICO ===');
    console.log('Slug solicitado:', slug);
    console.log('ID do produto:', id);
    // Busca a loja pelo slug
    const loja = await prisma_1.default.stores.findUnique({ where: { slug }, select: { id: true } });
    if (!loja)
        return res.status(404).json({ error: 'Loja não encontrada' });
    // Busca o produto específico dessa loja
    const produto = await prisma_1.default.products.findFirst({
        where: {
            id: id,
            store_id: loja.id,
            is_active: true
        },
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            stock: true,
            is_active: true,
            image: true,
            images: true,
            categories: {
                select: {
                    id: true,
                    name: true,
                    color: true
                }
            }
        }
    });
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado ou não está ativo' });
    }
    console.log('Produto encontrado:', produto);
    res.json(produto);
});
exports.default = router;
