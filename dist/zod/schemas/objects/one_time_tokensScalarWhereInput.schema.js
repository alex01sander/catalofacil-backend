"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensScalarWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const Enumone_time_token_typeFilter_schema_1 = require("./Enumone_time_token_typeFilter.schema");
const one_time_token_type_schema_1 = require("../enums/one_time_token_type.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.one_time_tokensScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.one_time_tokensScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.one_time_tokensScalarWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.one_time_tokensScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.one_time_tokensScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    token_type: zod_1.z
        .union([
        zod_1.z.lazy(() => Enumone_time_token_typeFilter_schema_1.Enumone_time_token_typeFilterObjectSchema),
        zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema),
    ])
        .optional(),
    token_hash: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    relates_to: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    created_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
    updated_at: zod_1.z
        .union([zod_1.z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), zod_1.z.coerce.date()])
        .optional(),
})
    .strict();
exports.one_time_tokensScalarWhereInputObjectSchema = Schema;
