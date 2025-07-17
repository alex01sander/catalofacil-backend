"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_accountsOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const credit_accountsCountOrderByAggregateInput_schema_1 = require("./credit_accountsCountOrderByAggregateInput.schema");
const credit_accountsAvgOrderByAggregateInput_schema_1 = require("./credit_accountsAvgOrderByAggregateInput.schema");
const credit_accountsMaxOrderByAggregateInput_schema_1 = require("./credit_accountsMaxOrderByAggregateInput.schema");
const credit_accountsMinOrderByAggregateInput_schema_1 = require("./credit_accountsMinOrderByAggregateInput.schema");
const credit_accountsSumOrderByAggregateInput_schema_1 = require("./credit_accountsSumOrderByAggregateInput.schema");
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
    customer_name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    customer_phone: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    total_debt: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    status: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => credit_accountsCountOrderByAggregateInput_schema_1.credit_accountsCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z
        .lazy(() => credit_accountsAvgOrderByAggregateInput_schema_1.credit_accountsAvgOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => credit_accountsMaxOrderByAggregateInput_schema_1.credit_accountsMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => credit_accountsMinOrderByAggregateInput_schema_1.credit_accountsMinOrderByAggregateInputObjectSchema)
        .optional(),
    _sum: zod_1.z
        .lazy(() => credit_accountsSumOrderByAggregateInput_schema_1.credit_accountsSumOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.credit_accountsOrderByWithAggregationInputObjectSchema = Schema;
