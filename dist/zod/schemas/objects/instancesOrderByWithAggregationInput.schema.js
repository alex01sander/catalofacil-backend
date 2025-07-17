"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instancesOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const instancesCountOrderByAggregateInput_schema_1 = require("./instancesCountOrderByAggregateInput.schema");
const instancesMaxOrderByAggregateInput_schema_1 = require("./instancesMaxOrderByAggregateInput.schema");
const instancesMinOrderByAggregateInput_schema_1 = require("./instancesMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    uuid: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    raw_base_config: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    _count: zod_1.z
        .lazy(() => instancesCountOrderByAggregateInput_schema_1.instancesCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => instancesMaxOrderByAggregateInput_schema_1.instancesMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => instancesMinOrderByAggregateInput_schema_1.instancesMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.instancesOrderByWithAggregationInputObjectSchema = Schema;
