"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedUuidNullableWithAggregatesFilterObjectSchema = void 0;
const zod_1 = require("zod");
const NestedIntNullableFilter_schema_1 = require("./NestedIntNullableFilter.schema");
const NestedStringNullableFilter_schema_1 = require("./NestedStringNullableFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    not: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => exports.NestedUuidNullableWithAggregatesFilterObjectSchema),
    ])
        .optional()
        .nullable(),
    _count: zod_1.z.lazy(() => NestedIntNullableFilter_schema_1.NestedIntNullableFilterObjectSchema).optional(),
    _min: zod_1.z.lazy(() => NestedStringNullableFilter_schema_1.NestedStringNullableFilterObjectSchema).optional(),
    _max: zod_1.z.lazy(() => NestedStringNullableFilter_schema_1.NestedStringNullableFilterObjectSchema).optional(),
})
    .strict();
exports.NestedUuidNullableWithAggregatesFilterObjectSchema = Schema;
