"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cash_flowCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id: zod_1.z.string(),
    store_id: zod_1.z.string().optional().nullable(),
    type: zod_1.z.string(),
    category: zod_1.z.string(),
    description: zod_1.z.string(),
    amount: zod_1.z.number(),
    date: zod_1.z.coerce.date().optional(),
    payment_method: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional(),
    updated_at: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.cash_flowCreateManyInputObjectSchema = Schema;
