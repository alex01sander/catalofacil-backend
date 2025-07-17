"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cash_flowOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const cash_flowCountOrderByAggregateInput_schema_1 = require("./cash_flowCountOrderByAggregateInput.schema");
const cash_flowAvgOrderByAggregateInput_schema_1 = require("./cash_flowAvgOrderByAggregateInput.schema");
const cash_flowMaxOrderByAggregateInput_schema_1 = require("./cash_flowMaxOrderByAggregateInput.schema");
const cash_flowMinOrderByAggregateInput_schema_1 = require("./cash_flowMinOrderByAggregateInput.schema");
const cash_flowSumOrderByAggregateInput_schema_1 = require("./cash_flowSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    category: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    payment_method: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => cash_flowCountOrderByAggregateInput_schema_1.cash_flowCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z
        .lazy(() => cash_flowAvgOrderByAggregateInput_schema_1.cash_flowAvgOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => cash_flowMaxOrderByAggregateInput_schema_1.cash_flowMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => cash_flowMinOrderByAggregateInput_schema_1.cash_flowMinOrderByAggregateInputObjectSchema)
        .optional(),
    _sum: zod_1.z
        .lazy(() => cash_flowSumOrderByAggregateInput_schema_1.cash_flowSumOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.cash_flowOrderByWithAggregationInputObjectSchema = Schema;
