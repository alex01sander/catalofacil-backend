"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalWithAggregatesFilterObjectSchema = void 0;
const zod_1 = require("zod");
const NestedDecimalWithAggregatesFilter_schema_1 = require("./NestedDecimalWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedDecimalFilter_schema_1 = require("./NestedDecimalFilter.schema");
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
        zod_1.z.lazy(() => NestedDecimalWithAggregatesFilter_schema_1.NestedDecimalWithAggregatesFilterObjectSchema),
    ])
        .optional(),
    _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(),
    _avg: zod_1.z.lazy(() => NestedDecimalFilter_schema_1.NestedDecimalFilterObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => NestedDecimalFilter_schema_1.NestedDecimalFilterObjectSchema).optional(),
    _min: zod_1.z.lazy(() => NestedDecimalFilter_schema_1.NestedDecimalFilterObjectSchema).optional(),
    _max: zod_1.z.lazy(() => NestedDecimalFilter_schema_1.NestedDecimalFilterObjectSchema).optional(),
})
    .strict();
exports.DecimalWithAggregatesFilterObjectSchema = Schema;
