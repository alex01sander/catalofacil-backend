"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refresh_tokensScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Refresh_tokensScalarFieldEnumSchema = zod_1.z.enum([
    'instance_id',
    'id',
    'token',
    'user_id',
    'revoked',
    'created_at',
    'updated_at',
    'parent',
    'session_id',
]);
