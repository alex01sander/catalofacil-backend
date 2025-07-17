"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const profilesCountOrderByAggregateInput_schema_1 = require("./profilesCountOrderByAggregateInput.schema");
const profilesMaxOrderByAggregateInput_schema_1 = require("./profilesMaxOrderByAggregateInput.schema");
const profilesMinOrderByAggregateInput_schema_1 = require("./profilesMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    full_name: zod_1.z
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
        .lazy(() => profilesCountOrderByAggregateInput_schema_1.profilesCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z.lazy(() => profilesMaxOrderByAggregateInput_schema_1.profilesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: zod_1.z.lazy(() => profilesMinOrderByAggregateInput_schema_1.profilesMinOrderByAggregateInputObjectSchema).optional(),
})
    .strict();
exports.profilesOrderByWithAggregationInputObjectSchema = Schema;
