"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidWithAggregatesFilter_schema_1 = require("./UuidWithAggregatesFilter.schema");
const Enumone_time_token_typeWithAggregatesFilter_schema_1 = require("./Enumone_time_token_typeWithAggregatesFilter.schema");
const one_time_token_type_schema_1 = require("../enums/one_time_token_type.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.one_time_tokensScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.one_time_tokensScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.one_time_tokensScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.one_time_tokensScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.one_time_tokensScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidWithAggregatesFilter_schema_1.UuidWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    token_type: zod_1.z
        .union([
        zod_1.z.lazy(() => Enumone_time_token_typeWithAggregatesFilter_schema_1.Enumone_time_token_typeWithAggregatesFilterObjectSchema),
        zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema),
    ])
        .optional(),
    token_hash: zod_1.z
        .union([
        zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional(),
    relates_to: zod_1.z
        .union([
        zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional(),
})
    .strict();
exports.one_time_tokensScalarWhereWithAggregatesInputObjectSchema = Schema;
