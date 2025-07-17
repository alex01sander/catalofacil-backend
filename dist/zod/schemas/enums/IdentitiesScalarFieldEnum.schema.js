"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentitiesScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.IdentitiesScalarFieldEnumSchema = zod_1.z.enum([
    'provider_id',
    'user_id',
    'identity_data',
    'provider',
    'last_sign_in_at',
    'created_at',
    'updated_at',
    'email',
    'id',
]);
