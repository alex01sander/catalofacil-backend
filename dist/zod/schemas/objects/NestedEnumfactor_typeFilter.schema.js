"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumfactor_typeFilterObjectSchema = void 0;
const zod_1 = require("zod");
const factor_type_schema_1 = require("../enums/factor_type.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema).optional(),
    in: zod_1.z
        .union([
        zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema).array(),
        zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema),
    ])
        .optional(),
    notIn: zod_1.z
        .union([
        zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema).array(),
        zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema),
    ])
        .optional(),
    not: zod_1.z
        .union([
        zod_1.z.lazy(() => factor_type_schema_1.factor_typeSchema),
        zod_1.z.lazy(() => exports.NestedEnumfactor_typeFilterObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.NestedEnumfactor_typeFilterObjectSchema = Schema;
