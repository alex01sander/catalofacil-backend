"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ordersCountOrderByAggregateInput_schema_1 = require("./ordersCountOrderByAggregateInput.schema");
const ordersAvgOrderByAggregateInput_schema_1 = require("./ordersAvgOrderByAggregateInput.schema");
const ordersMaxOrderByAggregateInput_schema_1 = require("./ordersMaxOrderByAggregateInput.schema");
const ordersMinOrderByAggregateInput_schema_1 = require("./ordersMinOrderByAggregateInput.schema");
const ordersSumOrderByAggregateInput_schema_1 = require("./ordersSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_owner_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    customer_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    customer_name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    customer_email: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    customer_phone: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    total_amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    status: zod_1.z
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
    store_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    _count: zod_1.z
        .lazy(() => ordersCountOrderByAggregateInput_schema_1.ordersCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z.lazy(() => ordersAvgOrderByAggregateInput_schema_1.ordersAvgOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => ordersMaxOrderByAggregateInput_schema_1.ordersMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => ordersMinOrderByAggregateInput_schema_1.ordersMinOrderByAggregateInputObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => ordersSumOrderByAggregateInput_schema_1.ordersSumOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.ordersOrderByWithAggregationInputObjectSchema = Schema;
