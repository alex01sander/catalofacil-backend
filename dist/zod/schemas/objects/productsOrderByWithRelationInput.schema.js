"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const order_itemsOrderByRelationAggregateInput_schema_1 = require("./order_itemsOrderByRelationAggregateInput.schema");
const categoriesOrderByWithRelationInput_schema_1 = require("./categoriesOrderByWithRelationInput.schema");
const storesOrderByWithRelationInput_schema_1 = require("./storesOrderByWithRelationInput.schema");
const usersOrderByWithRelationInput_schema_1 = require("./usersOrderByWithRelationInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    category_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    stock: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    is_active: zod_1.z
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
    images: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
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
    order_items: zod_1.z
        .lazy(() => order_itemsOrderByRelationAggregateInput_schema_1.order_itemsOrderByRelationAggregateInputObjectSchema)
        .optional(),
    categories: zod_1.z
        .lazy(() => categoriesOrderByWithRelationInput_schema_1.categoriesOrderByWithRelationInputObjectSchema)
        .optional(),
    stores: zod_1.z.lazy(() => storesOrderByWithRelationInput_schema_1.storesOrderByWithRelationInputObjectSchema).optional(),
    users: zod_1.z.lazy(() => usersOrderByWithRelationInput_schema_1.usersOrderByWithRelationInputObjectSchema).optional(),
})
    .strict();
exports.productsOrderByWithRelationInputObjectSchema = Schema;
