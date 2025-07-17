"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_accountsCreateWithoutCredit_transactionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id: zod_1.z.string(),
    store_id: zod_1.z.string().optional().nullable(),
    customer_name: zod_1.z.string(),
    customer_phone: zod_1.z.string().optional().nullable(),
    total_debt: zod_1.z.number().optional(),
    created_at: zod_1.z.coerce.date().optional(),
    updated_at: zod_1.z.coerce.date().optional(),
    status: zod_1.z.string().optional(),
})
    .strict();
exports.credit_accountsCreateWithoutCredit_transactionsInputObjectSchema = Schema;
