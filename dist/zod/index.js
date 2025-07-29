"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creditDebitWithInstallmentsSchema = exports.cashFlowUpdateInputSchema = exports.cashFlowCreateInputSchema = exports.ordersUpdateInputSchema = exports.ordersCreateInputSchema = exports.store_settingsUpdateInputSchema = exports.store_settingsCreateInputSchema = exports.expensesUpdateInputSchema = exports.expensesCreateInputSchema = exports.credit_accountsUpdateInputSchema = exports.credit_accountsCreateInputSchema = exports.customersUpdateInputSchema = exports.customersCreateInputSchema = exports.categoriesUpdateInputSchema = exports.categoriesCreateInputSchema = exports.credit_installmentsUpdateInputSchema = exports.credit_installmentsCreateInputSchema = exports.credit_transactionsUpdateInputSchema = exports.credit_transactionsCreateInputSchema = exports.salesUpdateInputSchema = exports.salesCreateInputSchema = exports.productsUpdateInputSchema = exports.productsCreateInputSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// SCHEMAS PRINCIPAIS
/////////////////////////////////////////
// Products
exports.productsCreateInputSchema = zod_1.z.object({
    name: zod_1.z.string(),
    price: zod_1.z.number(),
    user_id: zod_1.z.string(), // campo obrigatório para alinhar com o modelo Prisma
    // Adicione outros campos obrigatórios conforme necessário
});
exports.productsUpdateInputSchema = exports.productsCreateInputSchema.partial();
// Sales
exports.salesCreateInputSchema = zod_1.z.object({
    product_name: zod_1.z.string().min(1, 'Nome do produto é obrigatório'),
    quantity: zod_1.z.number().min(1, 'Quantidade deve ser maior que 0'),
    unit_price: zod_1.z.union([zod_1.z.number(), zod_1.z.string().transform(val => parseFloat(val))]).refine(val => val > 0, 'Preço unitário deve ser maior que 0'),
    total_price: zod_1.z.union([zod_1.z.number(), zod_1.z.string().transform(val => parseFloat(val))]).refine(val => val > 0, 'Preço total deve ser maior que 0'),
    sale_date: zod_1.z.union([
        zod_1.z.date(),
        zod_1.z.string().transform(val => new Date(val))
    ]).refine(val => !isNaN(val.getTime()), 'Data de venda inválida'),
    status: zod_1.z.string().optional().default('completed'),
    store_id: zod_1.z.string().optional(),
});
exports.salesUpdateInputSchema = exports.salesCreateInputSchema.partial();
// Credit Transactions
exports.credit_transactionsCreateInputSchema = zod_1.z.object({
    credit_account_id: zod_1.z.string(),
    user_id: zod_1.z.string(),
    type: zod_1.z.enum(['debito', 'pagamento']),
    amount: zod_1.z.union([
        zod_1.z.number().positive('Valor deve ser positivo'),
        zod_1.z.string().transform((val) => {
            const num = parseFloat(val);
            if (isNaN(num) || num <= 0) {
                throw new Error('Valor deve ser um número positivo');
            }
            return num;
        })
    ]),
    description: zod_1.z.string().optional(),
    date: zod_1.z.union([
        zod_1.z.date(),
        zod_1.z.string().transform((val) => new Date(val))
    ]).optional().default(() => new Date()),
});
exports.credit_transactionsUpdateInputSchema = zod_1.z.object({
    credit_account_id: zod_1.z.string().optional(),
    user_id: zod_1.z.string().optional(),
    type: zod_1.z.enum(['debito', 'pagamento']).optional(),
    amount: zod_1.z.number().optional(),
    description: zod_1.z.string().optional(),
    date: zod_1.z.date().optional(),
});
// Credit Installments
exports.credit_installmentsCreateInputSchema = zod_1.z.object({
    transaction_id: zod_1.z.string(),
    installment_number: zod_1.z.number().int().positive('Número da parcela deve ser positivo'),
    due_date: zod_1.z.union([
        zod_1.z.date(),
        zod_1.z.string().transform((val) => new Date(val))
    ]),
    amount: zod_1.z.union([
        zod_1.z.number().positive('Valor deve ser positivo'),
        zod_1.z.string().transform((val) => {
            const num = parseFloat(val);
            if (isNaN(num) || num <= 0) {
                throw new Error('Valor deve ser um número positivo');
            }
            return num;
        })
    ]),
    status: zod_1.z.string().optional().default('pending'),
    paid_at: zod_1.z.date().optional(),
});
exports.credit_installmentsUpdateInputSchema = zod_1.z.object({
    transaction_id: zod_1.z.string().optional(),
    installment_number: zod_1.z.number().optional(),
    due_date: zod_1.z.date().optional(),
    amount: zod_1.z.number().optional(),
    status: zod_1.z.string().optional(),
    paid_at: zod_1.z.date().optional(),
});
// Categories
exports.categoriesCreateInputSchema = zod_1.z.object({
    name: zod_1.z.string(),
    color: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    storeId: zod_1.z.string().optional(),
});
exports.categoriesUpdateInputSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    color: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    storeId: zod_1.z.string().optional(),
});
// Customers
exports.customersCreateInputSchema = zod_1.z.object({
    store_owner_id: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
});
exports.customersUpdateInputSchema = zod_1.z.object({
    store_owner_id: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
});
// Credit Accounts
exports.credit_accountsCreateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string(),
    store_id: zod_1.z.string().optional(),
    customer_name: zod_1.z.string().min(1, 'Nome do cliente é obrigatório'),
    customer_phone: zod_1.z.string().min(1, 'Telefone do cliente é obrigatório'),
    customer_address: zod_1.z.string().optional(),
    total_debt: zod_1.z.number().optional().default(0),
    status: zod_1.z.string().optional().default('aguardando_pagamento'),
});
exports.credit_accountsUpdateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
    customer_name: zod_1.z.string().optional(),
    customer_phone: zod_1.z.string().optional(),
    customer_address: zod_1.z.string().optional(),
    total_debt: zod_1.z.number().optional(),
    status: zod_1.z.string().optional(),
});
// Expenses
exports.expensesCreateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string(),
    store_id: zod_1.z.string(),
    name: zod_1.z.string(),
    category: zod_1.z.string(),
    type: zod_1.z.string(),
    amount: zod_1.z.number(),
    due_date: zod_1.z.date().optional(),
    is_recurring: zod_1.z.boolean().optional(),
    recurring_frequency: zod_1.z.string().optional(),
    status: zod_1.z.string().optional(),
    paid_date: zod_1.z.date().optional(),
});
exports.expensesUpdateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    type: zod_1.z.string().optional(),
    amount: zod_1.z.number().optional(),
    due_date: zod_1.z.date().optional(),
    is_recurring: zod_1.z.boolean().optional(),
    recurring_frequency: zod_1.z.string().optional(),
    status: zod_1.z.string().optional(),
    paid_date: zod_1.z.date().optional(),
});
// Store Settings
exports.store_settingsCreateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string(),
    store_name: zod_1.z.string(),
    store_description: zod_1.z.string().optional(),
    mobile_logo: zod_1.z.string().optional(),
    desktop_banner: zod_1.z.string().optional(),
    mobile_banner_color: zod_1.z.string().optional(),
    mobile_banner_image: zod_1.z.string().optional(),
    store_subtitle: zod_1.z.string().optional(),
    instagram_url: zod_1.z.string().optional(),
    whatsapp_number: zod_1.z.string().optional(),
});
exports.store_settingsUpdateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string().optional(),
    store_name: zod_1.z.string().optional(),
    store_description: zod_1.z.string().optional(),
    mobile_logo: zod_1.z.string().optional(),
    desktop_banner: zod_1.z.string().optional(),
    mobile_banner_color: zod_1.z.string().optional(),
    mobile_banner_image: zod_1.z.string().optional(),
    store_subtitle: zod_1.z.string().optional(),
    instagram_url: zod_1.z.string().optional(),
    whatsapp_number: zod_1.z.string().optional(),
});
// Orders
exports.ordersCreateInputSchema = zod_1.z.object({
    store_owner_id: zod_1.z.string(),
    customer_id: zod_1.z.string().optional(),
    customer_name: zod_1.z.string(),
    customer_email: zod_1.z.string().optional(),
    customer_phone: zod_1.z.string().optional(),
    total_amount: zod_1.z.number(),
    status: zod_1.z.string().optional().default('pending'),
    store_id: zod_1.z.string().optional(),
});
exports.ordersUpdateInputSchema = zod_1.z.object({
    store_owner_id: zod_1.z.string().optional(),
    customer_id: zod_1.z.string().optional(),
    customer_name: zod_1.z.string().optional(),
    customer_email: zod_1.z.string().optional(),
    customer_phone: zod_1.z.string().optional(),
    total_amount: zod_1.z.number().optional(),
    status: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
});
// Cash Flow Schema (adicionado para melhor tipagem)
exports.cashFlowCreateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string(),
    store_id: zod_1.z.string().optional(),
    type: zod_1.z.enum(['entrada', 'saida', 'income', 'expense']).transform((val) => {
        // Converter para o formato interno do banco
        if (val === 'income')
            return 'entrada';
        if (val === 'expense')
            return 'saida';
        return val;
    }),
    category: zod_1.z.string(),
    description: zod_1.z.string(),
    amount: zod_1.z.union([
        zod_1.z.number().positive('Valor deve ser positivo'),
        zod_1.z.string().transform((val) => {
            const num = parseFloat(val);
            if (isNaN(num) || num <= 0) {
                throw new Error('Valor deve ser um número positivo');
            }
            return num;
        })
    ]),
    date: zod_1.z.union([
        zod_1.z.date(),
        zod_1.z.string().transform((val) => new Date(val))
    ]).optional().default(() => new Date()),
    payment_method: zod_1.z.string().optional().default('dinheiro'),
});
exports.cashFlowUpdateInputSchema = exports.cashFlowCreateInputSchema.partial();
// Schema para criar débito com parcelamento
exports.creditDebitWithInstallmentsSchema = zod_1.z.object({
    // Dados do cliente (novo ou existente)
    customer_name: zod_1.z.string().min(1, 'Nome do cliente é obrigatório'),
    customer_phone: zod_1.z.string().min(1, 'Telefone do cliente é obrigatório'),
    customer_address: zod_1.z.string().optional(),
    is_new_customer: zod_1.z.boolean().default(true),
    existing_customer_id: zod_1.z.string().optional(),
    // Dados da transação
    description: zod_1.z.string().min(1, 'Descrição é obrigatória'),
    total_amount: zod_1.z.union([
        zod_1.z.number().positive('Valor total deve ser positivo'),
        zod_1.z.string().transform((val) => {
            const num = parseFloat(val);
            if (isNaN(num) || num <= 0) {
                throw new Error('Valor total deve ser um número positivo');
            }
            return num;
        })
    ]),
    // Dados do parcelamento
    installments_count: zod_1.z.number().int().min(1, 'Número de parcelas deve ser pelo menos 1'),
    frequency: zod_1.z.enum(['diaria', 'semanal', 'quinzenal', 'mensal']),
    first_due_date: zod_1.z.union([
        zod_1.z.date(),
        zod_1.z.string().transform((val) => new Date(val))
    ]),
    // Observações
    observations: zod_1.z.string().optional(),
});
