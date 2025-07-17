"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumcode_challenge_methodFilterObjectSchema = void 0;
const zod_1 = require("zod");
const code_challenge_method_schema_1 = require("../enums/code_challenge_method.schema");
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
        zod_1.z.lazy(() => exports.NestedEnumcode_challenge_methodFilterObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.NestedEnumcode_challenge_methodFilterObjectSchema = Schema;
