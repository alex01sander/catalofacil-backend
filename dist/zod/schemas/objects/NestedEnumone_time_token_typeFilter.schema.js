"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumone_time_token_typeFilterObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_token_type_schema_1 = require("../enums/one_time_token_type.schema");
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
        zod_1.z.lazy(() => exports.NestedEnumone_time_token_typeFilterObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.NestedEnumone_time_token_typeFilterObjectSchema = Schema;
