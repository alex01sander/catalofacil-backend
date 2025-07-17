"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensScalarWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const BigIntFilter_schema_1 = require("./BigIntFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const BoolNullableFilter_schema_1 = require("./BoolNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.refresh_tokensScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.refresh_tokensScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.refresh_tokensScalarWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.refresh_tokensScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.refresh_tokensScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    instance_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => BigIntFilter_schema_1.BigIntFilterObjectSchema), zod_1.z.bigint()])
        .optional(),
    token: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    revoked: zod_1.z
        .union([zod_1.z.lazy(() => BoolNullableFilter_schema_1.BoolNullableFilterObjectSchema), zod_1.z.boolean()])
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
    parent: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    session_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
})
    .strict();
exports.refresh_tokensScalarWhereInputObjectSchema = Schema;
