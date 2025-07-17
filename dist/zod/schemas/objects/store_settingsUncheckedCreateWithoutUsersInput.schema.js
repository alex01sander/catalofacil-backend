"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store_settingsUncheckedCreateWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    store_name: zod_1.z.string().optional(),
    store_description: zod_1.z.string().optional().nullable(),
    mobile_logo: zod_1.z.string().optional().nullable(),
    desktop_banner: zod_1.z.string().optional().nullable(),
    mobile_banner_color: zod_1.z.string().optional().nullable(),
    mobile_banner_image: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    store_subtitle: zod_1.z.string().optional().nullable(),
    instagram_url: zod_1.z.string().optional().nullable(),
    whatsapp_number: zod_1.z.string().optional().nullable(),
})
    .strict();
exports.store_settingsUncheckedCreateWithoutUsersInputObjectSchema = Schema;
