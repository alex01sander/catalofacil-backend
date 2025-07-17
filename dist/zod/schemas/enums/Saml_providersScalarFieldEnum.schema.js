"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saml_providersScalarFieldEnumSchema = void 0;
const zod_1 = require("zod");
exports.Saml_providersScalarFieldEnumSchema = zod_1.z.enum([
    'id',
    'sso_provider_id',
    'entity_id',
    'metadata_xml',
    'metadata_url',
    'attribute_mapping',
    'created_at',
    'updated_at',
    'name_id_format',
]);
