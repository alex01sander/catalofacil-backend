"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensMinOrderByAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    token_type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    token_hash: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    relates_to: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.one_time_tokensMinOrderByAggregateInputObjectSchema = Schema;
