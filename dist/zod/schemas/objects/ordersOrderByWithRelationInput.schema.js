"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const order_itemsOrderByRelationAggregateInput_schema_1 = require("./order_itemsOrderByRelationAggregateInput.schema");
const customersOrderByWithRelationInput_schema_1 = require("./customersOrderByWithRelationInput.schema");
const storesOrderByWithRelationInput_schema_1 = require("./storesOrderByWithRelationInput.schema");
const usersOrderByWithRelationInput_schema_1 = require("./usersOrderByWithRelationInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    store_owner_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    customer_id: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    customer_name: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    customer_email: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    customer_phone: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    total_amount: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    status: zod_1.z
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
    order_items: zod_1.z
        .lazy(() => order_itemsOrderByRelationAggregateInput_schema_1.order_itemsOrderByRelationAggregateInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersOrderByWithRelationInput_schema_1.customersOrderByWithRelationInputObjectSchema)
        .optional(),
    stores: zod_1.z.lazy(() => storesOrderByWithRelationInput_schema_1.storesOrderByWithRelationInputObjectSchema).optional(),
    users: zod_1.z.lazy(() => usersOrderByWithRelationInput_schema_1.usersOrderByWithRelationInputObjectSchema).optional(),
})
    .strict();
exports.ordersOrderByWithRelationInputObjectSchema = Schema;
