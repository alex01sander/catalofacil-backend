"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.StoresScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'name',
    'slug',
    'domain',
    'user_id',
    'description',
    'logo_url',
    'banner_url',
    'whatsapp_number',
    'instagram_url',
    'theme_color',
    'created_at',
    'updated_at',
]);
