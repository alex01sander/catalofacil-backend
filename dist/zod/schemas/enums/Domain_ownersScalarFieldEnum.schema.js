"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain_ownersScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Domain_ownersScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'domain',
    'user_id',
    'created_at',
    'updated_at',
    'domain_type',
]);
