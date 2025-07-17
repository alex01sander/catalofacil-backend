"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const Sso_providersRelationFilter_schema_1 = require("./Sso_providersRelationFilter.schema");
const sso_providersWhereInput_schema_1 = require("./sso_providersWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.sso_domainsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.sso_domainsWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.sso_domainsWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.sso_domainsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.sso_domainsWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    sso_provider_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    domain: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
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
    sso_providers: zod_1.z
        .union([
        zod_1.z.lazy(() => Sso_providersRelationFilter_schema_1.Sso_providersRelationFilterObjectSchema),
        zod_1.z.lazy(() => sso_providersWhereInput_schema_1.sso_providersWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.sso_domainsWhereInputObjectSchema = Schema;
