"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const Saml_providersListRelationFilter_schema_1 = require("./Saml_providersListRelationFilter.schema");
const Saml_relay_statesListRelationFilter_schema_1 = require("./Saml_relay_statesListRelationFilter.schema");
const Sso_domainsListRelationFilter_schema_1 = require("./Sso_domainsListRelationFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.sso_providersWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.sso_providersWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.sso_providersWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.sso_providersWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.sso_providersWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    resource_id: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
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
    saml_providers: zod_1.z
        .lazy(() => Saml_providersListRelationFilter_schema_1.Saml_providersListRelationFilterObjectSchema)
        .optional(),
    saml_relay_states: zod_1.z
        .lazy(() => Saml_relay_statesListRelationFilter_schema_1.Saml_relay_statesListRelationFilterObjectSchema)
        .optional(),
    sso_domains: zod_1.z
        .lazy(() => Sso_domainsListRelationFilter_schema_1.Sso_domainsListRelationFilterObjectSchema)
        .optional(),
})
    .strict();
exports.sso_providersWhereInputObjectSchema = Schema;
