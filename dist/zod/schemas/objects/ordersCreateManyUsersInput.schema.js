"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateManyUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    customer_id: zod_1.z.string().optional().nullable(),
    customer_name: zod_1.z.string(),
    customer_email: zod_1.z.string().optional().nullable(),
    customer_phone: zod_1.z.string().optional().nullable(),
    total_amount: zod_1.z.number().optional(),
    status: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    store_id: zod_1.z.string().optional().nullable(),
})
    .strict();
exports.ordersCreateManyUsersInputObjectSchema = Schema;
