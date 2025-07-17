"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedFloatWithAggregatesFilterObjectSchema = void 0;
const zod_1 = require("zod");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedFloatFilter_schema_1 = require("./NestedFloatFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => exports.NestedFloatWithAggregatesFilterObjectSchema),
    ])
        .optional(),
    _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(),
    _avg: zod_1.z.lazy(() => NestedFloatFilter_schema_1.NestedFloatFilterObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => NestedFloatFilter_schema_1.NestedFloatFilterObjectSchema).optional(),
    _min: zod_1.z.lazy(() => NestedFloatFilter_schema_1.NestedFloatFilterObjectSchema).optional(),
    _max: zod_1.z.lazy(() => NestedFloatFilter_schema_1.NestedFloatFilterObjectSchema).optional(),
})
    .strict();
exports.NestedFloatWithAggregatesFilterObjectSchema = Schema;
