"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cash_flowCountOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    category: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    date: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    payment_method: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.cash_flowCountOrderByAggregateInputObjectSchema = Schema;
