"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersOrderByWithAggregationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const customersCountOrderByAggregateInput_schema_1 = require("./customersCountOrderByAggregateInput.schema");
const customersMaxOrderByAggregateInput_schema_1 = require("./customersMaxOrderByAggregateInput.schema");
const customersMinOrderByAggregateInput_schema_1 = require("./customersMinOrderByAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_owner_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    email: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    phone: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    address: zod_1.z
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
    store_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    _count: zod_1.z
        .lazy(() => customersCountOrderByAggregateInput_schema_1.customersCountOrderByAggregateInputObjectSchema)
        .optional(),
    _max: zod_1.z
        .lazy(() => customersMaxOrderByAggregateInput_schema_1.customersMaxOrderByAggregateInputObjectSchema)
        .optional(),
    _min: zod_1.z
        .lazy(() => customersMinOrderByAggregateInput_schema_1.customersMinOrderByAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.customersOrderByWithAggregationInputObjectSchema = Schema;
