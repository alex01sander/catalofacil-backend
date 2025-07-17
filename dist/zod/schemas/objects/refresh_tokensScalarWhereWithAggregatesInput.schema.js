"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidNullableWithAggregatesFilter_schema_1 = require("./UuidNullableWithAggregatesFilter.schema");
const BigIntWithAggregatesFilter_schema_1 = require("./BigIntWithAggregatesFilter.schema");
const StringNullableWithAggregatesFilter_schema_1 = require("./StringNullableWithAggregatesFilter.schema");
const BoolNullableWithAggregatesFilter_schema_1 = require("./BoolNullableWithAggregatesFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.refresh_tokensScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.refresh_tokensScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.refresh_tokensScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.refresh_tokensScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.refresh_tokensScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    instance_id: zod_1.z
        .union([
        zod_1.z.lazy(() => UuidNullableWithAggregatesFilter_schema_1.UuidNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => BigIntWithAggregatesFilter_schema_1.BigIntWithAggregatesFilterObjectSchema), zod_1.z.bigint()])
        .optional(),
    token: zod_1.z
        .union([
        zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    user_id: zod_1.z
        .union([
        zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    revoked: zod_1.z
        .union([
        zod_1.z.lazy(() => BoolNullableWithAggregatesFilter_schema_1.BoolNullableWithAggregatesFilterObjectSchema),
        zod_1.z.boolean(),
    ])
        .optional()
        .nullable(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    parent: zod_1.z
        .union([
        zod_1.z.lazy(() => StringNullableWithAggregatesFilter_schema_1.StringNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
    session_id: zod_1.z
        .union([
        zod_1.z.lazy(() => UuidNullableWithAggregatesFilter_schema_1.UuidNullableWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.refresh_tokensScalarWhereWithAggregatesInputObjectSchema = Schema;
