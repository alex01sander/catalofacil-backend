"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateManyUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    domain: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    logo_url: zod_1.z.string().optional().nullable(),
    banner_url: zod_1.z.string().optional().nullable(),
    whatsapp_number: zod_1.z.string().optional().nullable(),
    instagram_url: zod_1.z.string().optional().nullable(),
    theme_color: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
})
    .strict();
exports.storesCreateManyUsersInputObjectSchema = Schema;
