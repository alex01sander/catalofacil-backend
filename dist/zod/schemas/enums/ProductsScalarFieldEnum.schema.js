"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.ProductsScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'category_id',
    'name',
    'description',
    'price',
    'stock',
    'is_active',
    'image',
    'images',
    'created_at',
    'updated_at',
    'store_id',
]);
