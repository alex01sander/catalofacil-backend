"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    store_owner_id: zod_1.z.literal(true).optional(),
    customer_id: zod_1.z.literal(true).optional(),
    customer_name: zod_1.z.literal(true).optional(),
    customer_email: zod_1.z.literal(true).optional(),
    customer_phone: zod_1.z.literal(true).optional(),
    total_amount: zod_1.z.literal(true).optional(),
    status: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    store_id: zod_1.z.literal(true).optional(),
})
    .strict();
exports.OrdersMaxAggregateInputObjectSchema = Schema;
