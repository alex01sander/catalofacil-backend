"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const zod_1 = require("../zod");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
// Listar todas as contas de crédito
router.get('/', auth_1.default, async (req, res) => {
    const contas = await prisma_1.default.credit_accounts.findMany({ include: { credit_transactions: true } });
    res.json(contas);
});
// Buscar conta de crédito por ID
router.get('/:id', async (req, res) => {
    const conta = await prisma_1.default.credit_accounts.findUnique({
        where: { id: req.params.id },
        include: { credit_transactions: true }
    });
    if (!conta)
        return res.status(404).json({ error: 'Conta de crédito não encontrada' });
    res.json(conta);
});
// Criar conta de crédito
router.post('/', async (req, res) => {
    const parse = zod_1.credit_accountsCreateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        // Verifica se o usuário está autenticado
        const user = req.user;
        if (!user || !user.id) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }
        // Monta o objeto de dados com os campos obrigatórios
        const { customer_name, customer_phone } = req.body;
        // Verifica duplicidade de telefone para o mesmo usuário
        if (customer_phone) {
            const existente = await prisma_1.default.credit_accounts.findFirst({
                where: { customer_phone, user_id: user.id }
            });
            if (existente) {
                return res.status(400).json({ error: 'Já existe um cliente com este telefone.' });
            }
        }
        const nova = await prisma_1.default.credit_accounts.create({
            data: {
                user_id: user.id,
                customer_name,
                customer_phone,
                status: 'aguardando_pagamento',
            },
        });
        res.status(201).json(nova);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar conta de crédito', details: e });
    }
});
// Atualizar conta de crédito
router.put('/:id', async (req, res) => {
    const parse = zod_1.credit_accountsUpdateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const atualizada = await prisma_1.default.credit_accounts.update({
            where: { id: req.params.id },
            data: parse.data,
        });
        res.json(atualizada);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar conta de crédito', details: e });
    }
});
// Deletar conta de crédito
router.delete('/:id', async (req, res) => {
    try {
        await prisma_1.default.credit_accounts.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar conta de crédito', details: e });
    }
});
exports.default = router;
