"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsCreateManyInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    order_id: zod_1.z.string(),
    product_id: zod_1.z.string(),
    quantity: zod_1.z.number().optional(),
    unit_price: zod_1.z.number(),
    total_price: zod_1.z.number(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
})
    .strict();
exports.order_itemsCreateManyInputObjectSchema = Schema;
