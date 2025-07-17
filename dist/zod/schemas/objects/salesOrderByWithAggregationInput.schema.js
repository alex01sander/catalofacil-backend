"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const salesCountOrderByAggregateInput_schema_1 = require("./salesCountOrderByAggregateInput.schema");
const salesAvgOrderByAggregateInput_schema_1 = require("./salesAvgOrderByAggregateInput.schema");
const salesMaxOrderByAggregateInput_schema_1 = require("./salesMaxOrderByAggregateInput.schema");
const salesMinOrderByAggregateInput_schema_1 = require("./salesMinOrderByAggregateInput.schema");
const salesSumOrderByAggregateInput_schema_1 = require("./salesSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    product_name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    unit_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    total_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    sale_date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    status: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    _count: zod_1.z
        .lazy(() => salesCountOrderByAggregateInput_schema_1.salesCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z.lazy(() => salesAvgOrderByAggregateInput_schema_1.salesAvgOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => salesMaxOrderByAggregateInput_schema_1.salesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => salesMinOrderByAggregateInput_schema_1.salesMinOrderByAggregateInputObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => salesSumOrderByAggregateInput_schema_1.salesSumOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.salesOrderByWithAggregationInputObjectSchema = Schema;
