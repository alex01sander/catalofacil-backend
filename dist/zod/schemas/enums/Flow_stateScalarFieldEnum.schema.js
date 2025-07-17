"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flow_stateScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Flow_stateScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'auth_code',
    'code_challenge_method',
    'code_challenge',
    'provider_type',
    'provider_access_token',
    'provider_refresh_token',
    'created_at',
    'updated_at',
    'authentication_method',
    'auth_code_issued_at',
]);
