"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.ProductScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'title',
    'description',
    'price',
    'imageUrl',
    'domainId',
    'createdAt',
]);
