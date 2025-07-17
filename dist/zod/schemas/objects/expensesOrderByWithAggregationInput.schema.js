"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expensesOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const expensesCountOrderByAggregateInput_schema_1 = require("./expensesCountOrderByAggregateInput.schema");
const expensesAvgOrderByAggregateInput_schema_1 = require("./expensesAvgOrderByAggregateInput.schema");
const expensesMaxOrderByAggregateInput_schema_1 = require("./expensesMaxOrderByAggregateInput.schema");
const expensesMinOrderByAggregateInput_schema_1 = require("./expensesMinOrderByAggregateInput.schema");
const expensesSumOrderByAggregateInput_schema_1 = require("./expensesSumOrderByAggregateInput.schema");
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
    name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    category: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    due_date: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    is_recurring: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    recurring_frequency: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    status: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    paid_date: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => expensesCountOrderByAggregateInput_schema_1.expensesCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z.lazy(() => expensesAvgOrderByAggregateInput_schema_1.expensesAvgOrderByAggregateInputObjectSchema).optional(),
    _max: zod_1.z.lazy(() => expensesMaxOrderByAggregateInput_schema_1.expensesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => expensesMinOrderByAggregateInput_schema_1.expensesMinOrderByAggregateInputObjectSchema).optional(),
    _sum: zod_1.z.lazy(() => expensesSumOrderByAggregateInput_schema_1.expensesSumOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.expensesOrderByWithAggregationInputObjectSchema = Schema;
