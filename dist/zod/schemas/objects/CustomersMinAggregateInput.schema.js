"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    store_owner_id: zod_1.z.literal(true).optional(),
    name: zod_1.z.literal(true).optional(),
    email: zod_1.z.literal(true).optional(),
    phone: zod_1.z.literal(true).optional(),
    address: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    store_id: zod_1.z.literal(true).optional(),
})
    .strict();
exports.CustomersMinAggregateInputObjectSchema = Schema;
