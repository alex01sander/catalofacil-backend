"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Saml_providersMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    sso_provider_id: zod_1.z.literal(true).optional(),
    entity_id: zod_1.z.literal(true).optional(),
    metadata_xml: zod_1.z.literal(true).optional(),
    metadata_url: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    name_id_format: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Saml_providersMinAggregateInputObjectSchema = Schema;
