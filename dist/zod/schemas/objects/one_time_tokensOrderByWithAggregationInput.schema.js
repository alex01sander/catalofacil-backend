"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const one_time_tokensCountOrderByAggregateInput_schema_1 = require("./one_time_tokensCountOrderByAggregateInput.schema");
const one_time_tokensMaxOrderByAggregateInput_schema_1 = require("./one_time_tokensMaxOrderByAggregateInput.schema");
const one_time_tokensMinOrderByAggregateInput_schema_1 = require("./one_time_tokensMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    token_type: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    token_hash: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    relates_to: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    updated_at: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => one_time_tokensCountOrderByAggregateInput_schema_1.one_time_tokensCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => one_time_tokensMaxOrderByAggregateInput_schema_1.one_time_tokensMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => one_time_tokensMinOrderByAggregateInput_schema_1.one_time_tokensMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.one_time_tokensOrderByWithAggregationInputObjectSchema = Schema;
