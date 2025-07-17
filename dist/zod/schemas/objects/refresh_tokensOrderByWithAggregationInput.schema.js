"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const refresh_tokensCountOrderByAggregateInput_schema_1 = require("./refresh_tokensCountOrderByAggregateInput.schema");
const refresh_tokensAvgOrderByAggregateInput_schema_1 = require("./refresh_tokensAvgOrderByAggregateInput.schema");
const refresh_tokensMaxOrderByAggregateInput_schema_1 = require("./refresh_tokensMaxOrderByAggregateInput.schema");
const refresh_tokensMinOrderByAggregateInput_schema_1 = require("./refresh_tokensMinOrderByAggregateInput.schema");
const refresh_tokensSumOrderByAggregateInput_schema_1 = require("./refresh_tokensSumOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    token: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    user_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    revoked: zod_1.z
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
    parent: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    session_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    _count: zod_1.z
        .lazy(() => refresh_tokensCountOrderByAggregateInput_schema_1.refresh_tokensCountOrderByAggregateInputObjectSchema)
        .optional(),
    _avg: zod_1.z
        .lazy(() => refresh_tokensAvgOrderByAggregateInput_schema_1.refresh_tokensAvgOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => refresh_tokensMaxOrderByAggregateInput_schema_1.refresh_tokensMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => refresh_tokensMinOrderByAggregateInput_schema_1.refresh_tokensMinOrderByAggregateInputObjectSchema)
        .optional(),
    _sum: zod_1.z
        .lazy(() => refresh_tokensSumOrderByAggregateInput_schema_1.refresh_tokensSumOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.refresh_tokensOrderByWithAggregationInputObjectSchema = Schema;
