"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mfa_factorsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Mfa_factorsScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'user_id',
    'friendly_name',
    'factor_type',
    'status',
    'created_at',
    'updated_at',
    'secret',
    'phone',
    'last_challenged_at',
    'web_authn_credential',
    'web_authn_aaguid',
]);
