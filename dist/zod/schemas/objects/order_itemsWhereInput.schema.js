"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const DecimalFilter_schema_1 = require("./DecimalFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const OrdersRelationFilter_schema_1 = require("./OrdersRelationFilter.schema");
const ordersWhereInput_schema_1 = require("./ordersWhereInput.schema");
const ProductsRelationFilter_schema_1 = require("./ProductsRelationFilter.schema");
const productsWhereInput_schema_1 = require("./productsWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.order_itemsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.order_itemsWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.order_itemsWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.order_itemsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.order_itemsWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    order_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    product_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    quantity: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    unit_price: zod_1.z
        .union([zod_1.z.lazy(() => DecimalFilter_schema_1.DecimalFilterObjectSchema), zod_1.z.number()])
        .optional(),
    total_price: zod_1.z
        .union([zod_1.z.lazy(() => DecimalFilter_schema_1.DecimalFilterObjectSchema), zod_1.z.number()])
        .optional(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    orders: zod_1.z
        .union([
        zod_1.z.lazy(() => OrdersRelationFilter_schema_1.OrdersRelationFilterObjectSchema),
        zod_1.z.lazy(() => ordersWhereInput_schema_1.ordersWhereInputObjectSchema),
    ])
        .optional(),
    products: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductsRelationFilter_schema_1.ProductsRelationFilterObjectSchema),
        zod_1.z.lazy(() => productsWhereInput_schema_1.productsWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.order_itemsWhereInputObjectSchema = Schema;
