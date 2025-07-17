"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credit_transactionsCountOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    credit_account_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.credit_transactionsCountOrderByAggregateInputObjectSchema = Schema;
