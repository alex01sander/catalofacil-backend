"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumfactor_statusFilterObjectSchema = void 0;
const zod_1 = require("zod");
const factor_status_schema_1 = require("../enums/factor_status.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema).optional(),
    in: zod_1.z
        .union([
        zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema).array(),
        zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema),
    ])
        .optional(),
    notIn: zod_1.z
        .union([
        zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema).array(),
        zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema),
    ])
        .optional(),
    not: zod_1.z
        .union([
        zod_1.z.lazy(() => factor_status_schema_1.factor_statusSchema),
        zod_1.z.lazy(() => exports.NestedEnumfactor_statusFilterObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.NestedEnumfactor_statusFilterObjectSchema = Schema;
