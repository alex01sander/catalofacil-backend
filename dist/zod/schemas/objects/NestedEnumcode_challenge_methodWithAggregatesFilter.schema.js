"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumcode_challenge_methodWithAggregatesFilterObjectSchema = void 0;
const zod_1 = require("zod");
const code_challenge_method_schema_1 = require("../enums/code_challenge_method.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumcode_challenge_methodFilter_schema_1 = require("./NestedEnumcode_challenge_methodFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.lazy(() => code_challenge_method_schema_1.code_challenge_methodSchema).optional(),
    in: zod_1.z
        .union([
        zod_1.z.lazy(() => code_challenge_method_schema_1.code_challenge_methodSchema).array(),
        zod_1.z.lazy(() => code_challenge_method_schema_1.code_challenge_methodSchema),
    ])
        .optional(),
    notIn: zod_1.z
        .union([
        zod_1.z.lazy(() => code_challenge_method_schema_1.code_challenge_methodSchema).array(),
        zod_1.z.lazy(() => code_challenge_method_schema_1.code_challenge_methodSchema),
    ])
        .optional(),
    not: zod_1.z
        .union([
        zod_1.z.lazy(() => code_challenge_method_schema_1.code_challenge_methodSchema),
        zod_1.z.lazy(() => exports.NestedEnumcode_challenge_methodWithAggregatesFilterObjectSchema),
    ])
        .optional(),
    _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(),
    _min: zod_1.z
        .lazy(() => NestedEnumcode_challenge_methodFilter_schema_1.NestedEnumcode_challenge_methodFilterObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => NestedEnumcode_challenge_methodFilter_schema_1.NestedEnumcode_challenge_methodFilterObjectSchema)
        .optional(),
})
    .strict();
exports.NestedEnumcode_challenge_methodWithAggregatesFilterObjectSchema = Schema;
