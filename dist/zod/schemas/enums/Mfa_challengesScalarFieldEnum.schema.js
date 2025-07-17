"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mfa_challengesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Mfa_challengesScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'factor_id',
    'created_at',
    'verified_at',
    'ip_address',
    'otp_code',
    'web_authn_session_data',
]);
