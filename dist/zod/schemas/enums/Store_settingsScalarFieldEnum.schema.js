"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store_settingsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Store_settingsScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'store_name',
    'store_description',
    'mobile_logo',
    'desktop_banner',
    'mobile_banner_color',
    'mobile_banner_image',
    'created_at',
    'updated_at',
    'store_subtitle',
    'instagram_url',
    'whatsapp_number',
]);
