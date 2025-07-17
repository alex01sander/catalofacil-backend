"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ordersOrderByWithRelationInput_schema_1 = require("./ordersOrderByWithRelationInput.schema");
const productsOrderByWithRelationInput_schema_1 = require("./productsOrderByWithRelationInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    order_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    product_id: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    quantity: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    unit_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    total_price: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema),
        zod_1.z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema),
    ])
        .optional(),
    orders: zod_1.z.lazy(() => ordersOrderByWithRelationInput_schema_1.ordersOrderByWithRelationInputObjectSchema).optional(),
    products: zod_1.z
        .lazy(() => productsOrderByWithRelationInput_schema_1.productsOrderByWithRelationInputObjectSchema)
        .optional(),
})
    .strict();
exports.order_itemsOrderByWithRelationInputObjectSchema = Schema;
