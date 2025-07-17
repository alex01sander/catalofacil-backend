"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const JsonNullableWithAggregatesFilter_schema_1 = require("./JsonNullableWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_challengesScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.mfa_challengesScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.mfa_challengesScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.mfa_challengesScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.mfa_challengesScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    factor_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional(),
    verified_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    ip_address: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    otp_code: zod_1.z
        .union([
        zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    web_authn_session_data: zod_1.z
        .lazy(() => JsonNullableWithAggregatesFilter_schema_1.JsonNullableWithAggregatesFilterObjectSchema)
        .optional(),
})
    .strict();
exports.mfa_challengesScalarWhereWithAggregatesInputObjectSchema = Schema;
