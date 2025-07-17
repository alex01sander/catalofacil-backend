"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cash_flowMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    store_id: zod_1.z.literal(true).optional(),
    type: zod_1.z.literal(true).optional(),
    category: zod_1.z.literal(true).optional(),
    description: zod_1.z.literal(true).optional(),
    amount: zod_1.z.literal(true).optional(),
    date: zod_1.z.literal(true).optional(),
    payment_method: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Cash_flowMinAggregateInputObjectSchema = Schema;
