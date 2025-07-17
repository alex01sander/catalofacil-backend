"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsScalarWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const Enumfactor_typeFilter_schema_1 = require("./Enumfactor_typeFilter.schema");
const factor_type_schema_1 = require("../enums/factor_type.schema");
const Enumfactor_statusFilter_schema_1 = require("./Enumfactor_statusFilter.schema");
const factor_status_schema_1 = require("../enums/factor_status.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const JsonNullableFilter_schema_1 = require("./JsonNullableFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_factorsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.mfa_factorsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.mfa_factorsScalarWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_factorsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.mfa_factorsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    friendly_name: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    factor_type: zod_1.z
        .union([
        zod_1.z.lazy(() => Enumfactor_typeFilter_schema_1.Enumfactor_typeFilterObjectSchema),
        zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema),
    ])
        .optional(),
    status: zod_1.z
        .union([
        zod_1.z.lazy(() => Enumfactor_statusFilter_schema_1.Enumfactor_statusFilterObjectSchema),
        zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema),
    ])
        .optional(),
    created_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    updated_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    secret: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    phone: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    last_challenged_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    web_authn_credential: zod_1.z
        .lazy(() => JsonNullableFilter_schema_1.JsonNullableFilterObjectSchema)
        .optional(),
    web_authn_aaguid: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
})
    .strict();
exports.mfa_factorsScalarWhereInputObjectSchema = Schema;
