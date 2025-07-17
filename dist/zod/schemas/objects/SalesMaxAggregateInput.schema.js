"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    product_name: zod_1.z.literal(true).optional(),
    quantity: zod_1.z.literal(true).optional(),
    unit_price: zod_1.z.literal(true).optional(),
    total_price: zod_1.z.literal(true).optional(),
    sale_date: zod_1.z.literal(true).optional(),
    status: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    store_id: zod_1.z.literal(true).optional(),
})
    .strict();
exports.SalesMaxAggregateInputObjectSchema = Schema;
