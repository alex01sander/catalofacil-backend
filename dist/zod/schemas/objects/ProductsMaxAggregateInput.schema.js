"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    category_id: zod_1.z.literal(true).optional(),
    name: zod_1.z.literal(true).optional(),
    description: zod_1.z.literal(true).optional(),
    price: zod_1.z.literal(true).optional(),
    stock: zod_1.z.literal(true).optional(),
    is_active: zod_1.z.literal(true).optional(),
    image: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    store_id: zod_1.z.literal(true).optional(),
})
    .strict();
exports.ProductsMaxAggregateInputObjectSchema = Schema;
