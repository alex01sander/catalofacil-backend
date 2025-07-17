"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const JsonNullableFilter_schema_1 = require("./JsonNullableFilter.schema");
const Mfa_factorsRelationFilter_schema_1 = require("./Mfa_factorsRelationFilter.schema");
const mfa_factorsWhereInput_schema_1 = require("./mfa_factorsWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_challengesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.mfa_challengesWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.mfa_challengesWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_challengesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.mfa_challengesWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    factor_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    created_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    verified_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    ip_address: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    otp_code: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    web_authn_session_data: zod_1.z
        .lazy(() => JsonNullableFilter_schema_1.JsonNullableFilterObjectSchema)
        .optional(),
    mfa_factors: zod_1.z
        .union([
        zod_1.z.lazy(() => Mfa_factorsRelationFilter_schema_1.Mfa_factorsRelationFilterObjectSchema),
        zod_1.z.lazy(() => mfa_factorsWhereInput_schema_1.mfa_factorsWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.mfa_challengesWhereInputObjectSchema = Schema;
