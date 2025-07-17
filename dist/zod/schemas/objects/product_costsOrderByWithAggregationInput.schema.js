"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_costsOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const product_costsCountOrderByAggregateInput_schema_1 = require("./product_costsCountOrderByAggregateInput.schema");
const product_costsAvgOrderByAggregateInput_schema_1 = require("./product_costsAvgOrderByAggregateInput.schema");
const product_costsMaxOrderByAggregateInput_schema_1 = require("./product_costsMaxOrderByAggregateInput.schema");
const product_costsMinOrderByAggregateInput_schema_1 = require("./product_costsMinOrderByAggregateInput.schema");
const product_costsSumOrderByAggregateInput_schema_1 = require("./product_costsSumOrderByAggregateInput.schema");
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
    product_name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    cost_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    desired_margin: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    suggested_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => product_costsCountOrderByAggregateInput_schema_1.product_costsCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z
        .lazy(() => product_costsAvgOrderByAggregateInput_schema_1.product_costsAvgOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => product_costsMaxOrderByAggregateInput_schema_1.product_costsMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => product_costsMinOrderByAggregateInput_schema_1.product_costsMinOrderByAggregateInputObjectSchema)
        .optional(),
    _sum: zod_1.z
        .lazy(() => product_costsSumOrderByAggregateInput_schema_1.product_costsSumOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.product_costsOrderByWithAggregationInputObjectSchema = Schema;
