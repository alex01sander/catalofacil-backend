"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_accountsMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    store_id: zod_1.z.literal(true).optional(),
    customer_name: zod_1.z.literal(true).optional(),
    customer_phone: zod_1.z.literal(true).optional(),
    total_debt: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    status: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Credit_accountsMaxAggregateInputObjectSchema = Schema;
