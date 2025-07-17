"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const identitiesCountOrderByAggregateInput_schema_1 = require("./identitiesCountOrderByAggregateInput.schema");
const identitiesMaxOrderByAggregateInput_schema_1 = require("./identitiesMaxOrderByAggregateInput.schema");
const identitiesMinOrderByAggregateInput_schema_1 = require("./identitiesMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    provider_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    identity_data: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    provider: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    last_sign_in_at: zod_1.z
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
    email: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    _count: zod_1.z
        .lazy(() => identitiesCountOrderByAggregateInput_schema_1.identitiesCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => identitiesMaxOrderByAggregateInput_schema_1.identitiesMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => identitiesMinOrderByAggregateInput_schema_1.identitiesMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.identitiesOrderByWithAggregationInputObjectSchema = Schema;
