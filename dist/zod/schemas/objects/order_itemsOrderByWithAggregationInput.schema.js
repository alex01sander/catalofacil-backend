"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const order_itemsCountOrderByAggregateInput_schema_1 = require("./order_itemsCountOrderByAggregateInput.schema");
const order_itemsAvgOrderByAggregateInput_schema_1 = require("./order_itemsAvgOrderByAggregateInput.schema");
const order_itemsMaxOrderByAggregateInput_schema_1 = require("./order_itemsMaxOrderByAggregateInput.schema");
const order_itemsMinOrderByAggregateInput_schema_1 = require("./order_itemsMinOrderByAggregateInput.schema");
const order_itemsSumOrderByAggregateInput_schema_1 = require("./order_itemsSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    order_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    product_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    unit_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    total_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    _count: zod_1.z
        .lazy(() => order_itemsCountOrderByAggregateInput_schema_1.order_itemsCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z
        .lazy(() => order_itemsAvgOrderByAggregateInput_schema_1.order_itemsAvgOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => order_itemsMaxOrderByAggregateInput_schema_1.order_itemsMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => order_itemsMinOrderByAggregateInput_schema_1.order_itemsMinOrderByAggregateInputObjectSchema)
        .optional(),
    _sum: zod_1.z
        .lazy(() => order_itemsSumOrderByAggregateInput_schema_1.order_itemsSumOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.order_itemsOrderByWithAggregationInputObjectSchema = Schema;
