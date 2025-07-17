"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeNullableWithAggregatesFilterObjectSchema = void 0;
const zod_1 = require("zod");
const NestedDateTimeNullableWithAggregatesFilter_schema_1 = require("./NestedDateTimeNullableWithAggregatesFilter.schema");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedDateTimeNullableFilter_schema_1 = require("./NestedDateTimeNullableFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.coerce.date().optional().nullable(),
    in: zod_1.z
        .union([zod_1.z.coerce.date().array(), zod_1.z.coerce.date()])
        .optional()
        .nullable(),
    notIn: zod_1.z
        .union([zod_1.z.coerce.date().array(), zod_1.z.coerce.date()])
        .optional()
        .nullable(),
    lt: zod_1.z.coerce.date().optional(),
    lte: zod_1.z.coerce.date().optional(),
    gt: zod_1.z.coerce.date().optional(),
    gte: zod_1.z.coerce.date().optional(),
    not: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NestedDateTimeNullableWithAggregatesFilter_schema_1.NestedDateTimeNullableWithAggregatesFilterObjectSchema),
    ])
        .optional()
        .nullable(),
    _count: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional(),
    _min: zod_1.z.lazy(() => NestedDateTimeNullableFilter_schema_1.NestedDateTimeNullableFilterObjectSchema).optional(),
    _max: zod_1.z.lazy(() => NestedDateTimeNullableFilter_schema_1.NestedDateTimeNullableFilterObjectSchema).optional(),
})
    .strict();
exports.DateTimeNullableWithAggregatesFilterObjectSchema = Schema;
