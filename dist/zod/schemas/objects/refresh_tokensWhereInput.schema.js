"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const BigIntFilter_schema_1 = require("./BigIntFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const BoolNullableFilter_schema_1 = require("./BoolNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const SessionsRelationFilter_schema_1 = require("./SessionsRelationFilter.schema");
const sessionsWhereInput_schema_1 = require("./sessionsWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.refresh_tokensWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.refresh_tokensWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.refresh_tokensWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.refresh_tokensWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.refresh_tokensWhereInputObjectSchema).array(),
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
    sessions: zod_1.z
        .union([
        zod_1.z.lazy(() => SessionsRelationFilter_schema_1.SessionsRelationFilterObjectSchema),
        zod_1.z.lazy(() => sessionsWhereInput_schema_1.sessionsWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.refresh_tokensWhereInputObjectSchema = Schema;
