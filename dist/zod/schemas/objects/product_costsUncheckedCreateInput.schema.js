"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_costsUncheckedCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id: zod_1.z.string(),
    store_id: zod_1.z.string().optional().nullable(),
    product_name: zod_1.z.string(),
    cost_price: zod_1.z.number(),
    desired_margin: zod_1.z.number(),
    suggested_price: zod_1.z.number(),
    created_at: zod_1.z.coerce.date().optional(),
    updated_at: zod_1.z.coerce.date().optional(),
})
    .strict();
exports.product_costsUncheckedCreateInputObjectSchema = Schema;
