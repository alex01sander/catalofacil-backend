"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_itemsMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    order_id: zod_1.z.literal(true).optional(),
    product_id: zod_1.z.literal(true).optional(),
    quantity: zod_1.z.literal(true).optional(),
    unit_price: zod_1.z.literal(true).optional(),
    total_price: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Order_itemsMinAggregateInputObjectSchema = Schema;
