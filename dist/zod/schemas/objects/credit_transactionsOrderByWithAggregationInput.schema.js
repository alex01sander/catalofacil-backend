"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const credit_transactionsCountOrderByAggregateInput_schema_1 = require("./credit_transactionsCountOrderByAggregateInput.schema");
const credit_transactionsAvgOrderByAggregateInput_schema_1 = require("./credit_transactionsAvgOrderByAggregateInput.schema");
const credit_transactionsMaxOrderByAggregateInput_schema_1 = require("./credit_transactionsMaxOrderByAggregateInput.schema");
const credit_transactionsMinOrderByAggregateInput_schema_1 = require("./credit_transactionsMinOrderByAggregateInput.schema");
const credit_transactionsSumOrderByAggregateInput_schema_1 = require("./credit_transactionsSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    credit_account_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => credit_transactionsCountOrderByAggregateInput_schema_1.credit_transactionsCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z
        .lazy(() => credit_transactionsAvgOrderByAggregateInput_schema_1.credit_transactionsAvgOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => credit_transactionsMaxOrderByAggregateInput_schema_1.credit_transactionsMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => credit_transactionsMinOrderByAggregateInput_schema_1.credit_transactionsMinOrderByAggregateInputObjectSchema)
        .optional(),
    _sum: zod_1.z
        .lazy(() => credit_transactionsSumOrderByAggregateInput_schema_1.credit_transactionsSumOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.credit_transactionsOrderByWithAggregationInputObjectSchema = Schema;
