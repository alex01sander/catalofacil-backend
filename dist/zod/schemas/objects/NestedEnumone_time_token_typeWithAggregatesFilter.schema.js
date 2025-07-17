"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumone_time_token_typeWithAggregatesFilterObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_token_type_schema_1 = require("../enums/one_time_token_type.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumone_time_token_typeFilter_schema_1 = require("./NestedEnumone_time_token_typeFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema).optional(),
    in: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema).array(),
        zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema),
    ])
        .optional(),
    notIn: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema).array(),
        zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema),
    ])
        .optional(),
    not: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_token_type_schema_1.one_time_token_typeSchema),
        zod_1.z.lazy(() => exports.NestedEnumone_time_token_typeWithAggregatesFilterObjectSchema),
    ])
        .optional(),
    _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(),
    _min: zod_1.z
        .lazy(() => NestedEnumone_time_token_typeFilter_schema_1.NestedEnumone_time_token_typeFilterObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => NestedEnumone_time_token_typeFilter_schema_1.NestedEnumone_time_token_typeFilterObjectSchema)
        .optional(),
})
    .strict();
exports.NestedEnumone_time_token_typeWithAggregatesFilterObjectSchema = Schema;
