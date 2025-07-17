"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const categoriesOrderByRelationAggregateInput_schema_1 = require("./categoriesOrderByRelationAggregateInput.schema");
const customersOrderByRelationAggregateInput_schema_1 = require("./customersOrderByRelationAggregateInput.schema");
const ordersOrderByRelationAggregateInput_schema_1 = require("./ordersOrderByRelationAggregateInput.schema");
const productsOrderByRelationAggregateInput_schema_1 = require("./productsOrderByRelationAggregateInput.schema");
const salesOrderByRelationAggregateInput_schema_1 = require("./salesOrderByRelationAggregateInput.schema");
const usersOrderByWithRelationInput_schema_1 = require("./usersOrderByWithRelationInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    slug: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    domain: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    user_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    description: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    logo_url: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    banner_url: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    whatsapp_number: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    instagram_url: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    theme_color: zod_1.z
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
    categories: zod_1.z
        .lazy(() => categoriesOrderByRelationAggregateInput_schema_1.categoriesOrderByRelationAggregateInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersOrderByRelationAggregateInput_schema_1.customersOrderByRelationAggregateInputObjectSchema)
        .optional(),
    orders: zod_1.z
        .lazy(() => ordersOrderByRelationAggregateInput_schema_1.ordersOrderByRelationAggregateInputObjectSchema)
        .optional(),
    products: zod_1.z
        .lazy(() => productsOrderByRelationAggregateInput_schema_1.productsOrderByRelationAggregateInputObjectSchema)
        .optional(),
    sales: zod_1.z
        .lazy(() => salesOrderByRelationAggregateInput_schema_1.salesOrderByRelationAggregateInputObjectSchema)
        .optional(),
    users: zod_1.z.lazy(() => usersOrderByWithRelationInput_schema_1.usersOrderByWithRelationInputObjectSchema).optional(),
})
    .strict();
exports.storesOrderByWithRelationInputObjectSchema = Schema;
