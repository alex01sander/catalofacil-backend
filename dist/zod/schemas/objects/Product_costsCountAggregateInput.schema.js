"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_costsCountAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    store_id: zod_1.z.literal(true).optional(),
    product_name: zod_1.z.literal(true).optional(),
    cost_price: zod_1.z.literal(true).optional(),
    desired_margin: zod_1.z.literal(true).optional(),
    suggested_price: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    _all: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Product_costsCountAggregateInputObjectSchema = Schema;
