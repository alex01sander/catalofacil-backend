"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const storesOrderByWithRelationInput_schema_1 = require("./storesOrderByWithRelationInput.schema");
const usersOrderByWithRelationInput_schema_1 = require("./usersOrderByWithRelationInput.schema");
const ordersOrderByRelationAggregateInput_schema_1 = require("./ordersOrderByRelationAggregateInput.schema");
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
    stores: zod_1.z.lazy(() => storesOrderByWithRelationInput_schema_1.storesOrderByWithRelationInputObjectSchema).optional(),
    users: zod_1.z.lazy(() => usersOrderByWithRelationInput_schema_1.usersOrderByWithRelationInputObjectSchema).optional(),
    orders: zod_1.z
        .lazy(() => ordersOrderByRelationAggregateInput_schema_1.ordersOrderByRelationAggregateInputObjectSchema)
        .optional(),
})
    .strict();
exports.customersOrderByWithRelationInputObjectSchema = Schema;
