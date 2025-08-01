"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedIntNullableWithAggregatesFilterObjectSchema = void 0;
const zod_1 = require("zod");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedFloatNullableFilter_schema_1 = require("./NestedFloatNullableFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.number().optional().nullable(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional().nullable(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => exports.NestedIntNullableWithAggregatesFilterObjectSchema),
    ])
        .optional()
        .nullable(),
    _count: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional(),
    _avg: zod_1.z.lazy(() => NestedFloatNullableFilter_schema_1.NestedFloatNullableFilterObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional(),
    _min: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional(),
    _max: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional(),
})
    .strict();
exports.NestedIntNullableWithAggregatesFilterObjectSchema = Schema;
