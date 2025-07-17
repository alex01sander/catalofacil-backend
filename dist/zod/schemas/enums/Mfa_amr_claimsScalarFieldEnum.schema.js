"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mfa_amr_claimsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Mfa_amr_claimsScalarFieldEnumSchema = zod_1.z.enum([
    'session_id',
    'created_at',
    'updated_at',
    'authentication_method',
    'id',
]);
