"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const sso_providersCountOrderByAggregateInput_schema_1 = require("./sso_providersCountOrderByAggregateInput.schema");
const sso_providersMaxOrderByAggregateInput_schema_1 = require("./sso_providersMaxOrderByAggregateInput.schema");
const sso_providersMinOrderByAggregateInput_schema_1 = require("./sso_providersMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    resource_id: zod_1.z
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
    _count: zod_1.z
        .lazy(() => sso_providersCountOrderByAggregateInput_schema_1.sso_providersCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => sso_providersMaxOrderByAggregateInput_schema_1.sso_providersMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => sso_providersMinOrderByAggregateInput_schema_1.sso_providersMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.sso_providersOrderByWithAggregationInputObjectSchema = Schema;
