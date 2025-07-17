"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const sso_domainsCountOrderByAggregateInput_schema_1 = require("./sso_domainsCountOrderByAggregateInput.schema");
const sso_domainsMaxOrderByAggregateInput_schema_1 = require("./sso_domainsMaxOrderByAggregateInput.schema");
const sso_domainsMinOrderByAggregateInput_schema_1 = require("./sso_domainsMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    sso_provider_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    domain: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
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
        .lazy(() => sso_domainsCountOrderByAggregateInput_schema_1.sso_domainsCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => sso_domainsMaxOrderByAggregateInput_schema_1.sso_domainsMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => sso_domainsMinOrderByAggregateInput_schema_1.sso_domainsMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.sso_domainsOrderByWithAggregationInputObjectSchema = Schema;
