"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_providersWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const JsonNullableFilter_schema_1 = require("./JsonNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const Sso_providersRelationFilter_schema_1 = require("./Sso_providersRelationFilter.schema");
const sso_providersWhereInput_schema_1 = require("./sso_providersWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.saml_providersWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.saml_providersWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.saml_providersWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.saml_providersWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.saml_providersWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    sso_provider_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    entity_id: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    metadata_xml: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    metadata_url: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    attribute_mapping: zod_1.z.lazy(() => JsonNullableFilter_schema_1.JsonNullableFilterObjectSchema).optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    name_id_format: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    sso_providers: zod_1.z
        .union([
        zod_1.z.lazy(() => Sso_providersRelationFilter_schema_1.Sso_providersRelationFilterObjectSchema),
        zod_1.z.lazy(() => sso_providersWhereInput_schema_1.sso_providersWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.saml_providersWhereInputObjectSchema = Schema;
