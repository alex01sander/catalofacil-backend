"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    name: zod_1.z.literal(true).optional(),
    color: zod_1.z.literal(true).optional(),
    image: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    store_id: zod_1.z.literal(true).optional(),
})
    .strict();
exports.CategoriesMaxAggregateInputObjectSchema = Schema;
