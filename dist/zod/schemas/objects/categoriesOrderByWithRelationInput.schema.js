"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const storesOrderByWithRelationInput_schema_1 = require("./storesOrderByWithRelationInput.schema");
const usersOrderByWithRelationInput_schema_1 = require("./usersOrderByWithRelationInput.schema");
const productsOrderByRelationAggregateInput_schema_1 = require("./productsOrderByRelationAggregateInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    color: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    image: zod_1.z
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
    store_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    stores: zod_1.z.lazy(() => storesOrderByWithRelationInput_schema_1.storesOrderByWithRelationInputObjectSchema).optional(),
    users: zod_1.z.lazy(() => usersOrderByWithRelationInput_schema_1.usersOrderByWithRelationInputObjectSchema).optional(),
    products: zod_1.z
        .lazy(() => productsOrderByRelationAggregateInput_schema_1.productsOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.categoriesOrderByWithRelationInputObjectSchema = Schema;
