"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_providersCreateManySso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const NullableJsonNullValueInput_schema_1 = require("../enums/NullableJsonNullValueInput.schema");
const literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
const jsonSchema = zod_1.z.lazy(() => zod_1.z.union([
    literalSchema,
    zod_1.z.array(jsonSchema.nullable()),
    zod_1.z.record(jsonSchema.nullable()),
]));
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    entity_id: zod_1.z.string(),
    metadata_xml: zod_1.z.string(),
    metadata_url: zod_1.z.string().optional().nullable(),
    attribute_mapping: zod_1.z
        .union([zod_1.z.lazy(() => NullableJsonNullValueInput_schema_1.NullableJsonNullValueInputSchema), jsonSchema])
        .optional(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    name_id_format: zod_1.z.string().optional().nullable(),
})
    .strict();
exports.saml_providersCreateManySso_providersInputObjectSchema = Schema;
