"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sso_domainsScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Sso_domainsScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'sso_provider_id',
    'domain',
    'created_at',
    'updated_at',
]);
