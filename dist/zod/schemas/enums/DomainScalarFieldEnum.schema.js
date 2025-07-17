"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.DomainScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'slug',
    'userId',
    'createdAt',
]);
