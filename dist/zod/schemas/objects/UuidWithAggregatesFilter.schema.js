"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidWithAggregatesFilterObjectSchema = void 0;
const zod_1 = require("zod");
const QueryMode_schema_1 = require("../enums/QueryMode.schema");
const NestedUuidWithAggregatesFilter_schema_1 = require("./NestedUuidWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedStringFilter_schema_1 = require("./NestedStringFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.string().optional(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => QueryMode_schema_1.QueryModeSchema).optional(),
    not: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NestedUuidWithAggregatesFilter_schema_1.NestedUuidWithAggregatesFilterObjectSchema),
    ])
        .optional(),
    _count: zod_1.z.lazy(() => NestedIntFilter_schema_1.NestedIntFilterObjectSchema).optional(),
    _min: zod_1.z.lazy(() => NestedStringFilter_schema_1.NestedStringFilterObjectSchema).optional(),
    _max: zod_1.z.lazy(() => NestedStringFilter_schema_1.NestedStringFilterObjectSchema).optional(),
})
    .strict();
exports.UuidWithAggregatesFilterObjectSchema = Schema;
