"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expensesCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id: zod_1.z.string(),
    store_id: zod_1.z.string().optional().nullable(),
    name: zod_1.z.string(),
    category: zod_1.z.string(),
    type: zod_1.z.string(),
    amount: zod_1.z.number(),
    due_date: zod_1.z.coerce.date().optional().nullable(),
    is_recurring: zod_1.z.boolean().optional().nullable(),
    recurring_frequency: zod_1.z.string().optional().nullable(),
    status: zod_1.z.string().optional().nullable(),
    paid_date: zod_1.z.coerce.date().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional(),
    updated_at: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.expensesCreateInputObjectSchema = Schema;
