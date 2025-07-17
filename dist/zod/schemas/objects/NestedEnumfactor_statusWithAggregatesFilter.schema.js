"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumfactor_statusWithAggregatesFilterObjectSchema = void 0;
const zod_1 = require("zod");
const factor_status_schema_1 = require("../enums/factor_status.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumfactor_statusFilter_schema_1 = require("./NestedEnumfactor_statusFilter.schema");
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
        zod_1.z.lazy(() => exports.NestedEnumfactor_statusWithAggregatesFilterObjectSchema),
    ])
        .optional(),
    _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(),
    _min: zod_1.z.lazy(() => NestedEnumfactor_statusFilter_schema_1.NestedEnumfactor_statusFilterObjectSchema).optional(),
    _max: zod_1.z.lazy(() => NestedEnumfactor_statusFilter_schema_1.NestedEnumfactor_statusFilterObjectSchema).optional(),
})
    .strict();
exports.NestedEnumfactor_statusWithAggregatesFilterObjectSchema = Schema;
