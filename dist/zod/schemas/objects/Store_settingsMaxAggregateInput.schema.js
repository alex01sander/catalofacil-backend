"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store_settingsMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    store_name: zod_1.z.literal(true).optional(),
    store_description: zod_1.z.literal(true).optional(),
    mobile_logo: zod_1.z.literal(true).optional(),
    desktop_banner: zod_1.z.literal(true).optional(),
    mobile_banner_color: zod_1.z.literal(true).optional(),
    mobile_banner_image: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    store_subtitle: zod_1.z.literal(true).optional(),
    instagram_url: zod_1.z.literal(true).optional(),
    whatsapp_number: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Store_settingsMaxAggregateInputObjectSchema = Schema;
