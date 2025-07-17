"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enumfactor_typeFilterObjectSchema = void 0;
const zod_1 = require("zod");
const factor_type_schema_1 = require("../enums/factor_type.schema");
const NestedEnumfactor_typeFilter_schema_1 = require("./NestedEnumfactor_typeFilter.schema");
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
        zod_1.z.lazy(() => NestedEnumfactor_typeFilter_schema_1.NestedEnumfactor_typeFilterObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.Enumfactor_typeFilterObjectSchema = Schema;
