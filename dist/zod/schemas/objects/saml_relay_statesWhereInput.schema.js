"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const Flow_stateRelationFilter_schema_1 = require("./Flow_stateRelationFilter.schema");
const flow_stateWhereInput_schema_1 = require("./flow_stateWhereInput.schema");
const Sso_providersRelationFilter_schema_1 = require("./Sso_providersRelationFilter.schema");
const sso_providersWhereInput_schema_1 = require("./sso_providersWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.saml_relay_statesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.saml_relay_statesWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.saml_relay_statesWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.saml_relay_statesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.saml_relay_statesWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    sso_provider_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    request_id: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    for_email: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    redirect_to: zod_1.z
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
    flow_state_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    flow_state: zod_1.z
        .union([
        zod_1.z.lazy(() => Flow_stateRelationFilter_schema_1.Flow_stateRelationFilterObjectSchema),
        zod_1.z.lazy(() => flow_stateWhereInput_schema_1.flow_stateWhereInputObjectSchema),
    ])
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
exports.saml_relay_statesWhereInputObjectSchema = Schema;
