"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresCountAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    name: zod_1.z.literal(true).optional(),
    slug: zod_1.z.literal(true).optional(),
    domain: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    description: zod_1.z.literal(true).optional(),
    logo_url: zod_1.z.literal(true).optional(),
    banner_url: zod_1.z.literal(true).optional(),
    whatsapp_number: zod_1.z.literal(true).optional(),
    instagram_url: zod_1.z.literal(true).optional(),
    theme_color: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    _all: zod_1.z.literal(true).optional(),
})
    .strict();
exports.StoresCountAggregateInputObjectSchema = Schema;
