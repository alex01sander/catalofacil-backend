"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpdateInputSchema = exports.ordersCreateInputSchema = exports.store_settingsUpdateInputSchema = exports.store_settingsCreateInputSchema = exports.expensesUpdateInputSchema = exports.expensesCreateInputSchema = exports.credit_accountsUpdateInputSchema = exports.credit_accountsCreateInputSchema = exports.customersUpdateInputSchema = exports.customersCreateInputSchema = exports.categoriesUpdateInputSchema = exports.categoriesCreateInputSchema = exports.credit_transactionsUpdateInputSchema = exports.credit_transactionsCreateInputSchema = exports.salesUpdateInputSchema = exports.salesCreateInputSchema = exports.productsUpdateInputSchema = exports.productsCreateInputSchema = void 0;
const zod_1 = require("zod");
/////////////////////////////////////////
// SCHEMAS PRINCIPAIS
/////////////////////////////////////////
// Products
exports.productsCreateInputSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    price: zod_1.z.number(),
    stock: zod_1.z.number().optional(),
    is_active: zod_1.z.boolean().optional(),
    image: zod_1.z.string().optional(),
    images: zod_1.z.array(zod_1.z.string()).optional(),
    user_id: zod_1.z.string(),
    category_id: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
});
exports.productsUpdateInputSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    price: zod_1.z.number().optional(),
    stock: zod_1.z.number().optional(),
    is_active: zod_1.z.boolean().optional(),
    image: zod_1.z.string().optional(),
    images: zod_1.z.array(zod_1.z.string()).optional(),
    user_id: zod_1.z.string().optional(),
    category_id: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
});
// Sales
exports.salesCreateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string(),
    product_name: zod_1.z.string(),
    quantity: zod_1.z.number(),
    unit_price: zod_1.z.number(),
    total_price: zod_1.z.number(),
    sale_date: zod_1.z.date(),
    status: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
});
exports.salesUpdateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string().optional(),
    product_name: zod_1.z.string().optional(),
    quantity: zod_1.z.number().optional(),
    unit_price: zod_1.z.number().optional(),
    total_price: zod_1.z.number().optional(),
    sale_date: zod_1.z.date().optional(),
    status: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
});
// Credit Transactions
exports.credit_transactionsCreateInputSchema = zod_1.z.object({
    credit_account_id: zod_1.z.string(),
    user_id: zod_1.z.string(),
    type: zod_1.z.string(),
    amount: zod_1.z.number(),
    description: zod_1.z.string(),
    date: zod_1.z.date(),
});
exports.credit_transactionsUpdateInputSchema = zod_1.z.object({
    credit_account_id: zod_1.z.string().optional(),
    user_id: zod_1.z.string().optional(),
    type: zod_1.z.string().optional(),
    amount: zod_1.z.number().optional(),
    description: zod_1.z.string().optional(),
    date: zod_1.z.date().optional(),
});
// Categories
exports.categoriesCreateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
});
exports.categoriesUpdateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    color: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
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
    store_id: zod_1.z.string(),
    customer_name: zod_1.z.string(),
    customer_phone: zod_1.z.string(),
    total_debt: zod_1.z.number().optional(),
    status: zod_1.z.string().optional(),
});
exports.credit_accountsUpdateInputSchema = zod_1.z.object({
    user_id: zod_1.z.string().optional(),
    store_id: zod_1.z.string().optional(),
    customer_name: zod_1.z.string().optional(),
    customer_phone: zod_1.z.string().optional(),
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
    status: zod_1.z.string().optional(),
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
