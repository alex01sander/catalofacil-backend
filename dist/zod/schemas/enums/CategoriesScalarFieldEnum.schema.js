"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.CategoriesScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'name',
    'color',
    'image',
    'created_at',
    'updated_at',
    'store_id',
]);
