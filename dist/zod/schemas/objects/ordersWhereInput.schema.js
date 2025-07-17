"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const DecimalFilter_schema_1 = require("./DecimalFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const Order_itemsListRelationFilter_schema_1 = require("./Order_itemsListRelationFilter.schema");
const CustomersRelationFilter_schema_1 = require("./CustomersRelationFilter.schema");
const customersWhereInput_schema_1 = require("./customersWhereInput.schema");
const StoresRelationFilter_schema_1 = require("./StoresRelationFilter.schema");
const storesWhereInput_schema_1 = require("./storesWhereInput.schema");
const UsersRelationFilter_schema_1 = require("./UsersRelationFilter.schema");
const usersWhereInput_schema_1 = require("./usersWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ordersWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ordersWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.ordersWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.ordersWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.ordersWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    store_owner_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    customer_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    customer_name: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    customer_email: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    customer_phone: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    total_amount: zod_1.z
        .union([zod_1.z.lazy(() => DecimalFilter_schema_1.DecimalFilterObjectSchema), zod_1.z.number()])
        .optional(),
    status: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    created_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    updated_at: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeNullableFilter_schema_1.DateTimeNullableFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional()
        .nullable(),
    store_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    order_items: zod_1.z
        .lazy(() => Order_itemsListRelationFilter_schema_1.Order_itemsListRelationFilterObjectSchema)
        .optional(),
    customers: zod_1.z
        .union([
        zod_1.z.lazy(() => CustomersRelationFilter_schema_1.CustomersRelationFilterObjectSchema),
        zod_1.z.lazy(() => customersWhereInput_schema_1.customersWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
    stores: zod_1.z
        .union([
        zod_1.z.lazy(() => StoresRelationFilter_schema_1.StoresRelationFilterObjectSchema),
        zod_1.z.lazy(() => storesWhereInput_schema_1.storesWhereInputObjectSchema),
    ])
        .optional()
        .nullable(),
    users: zod_1.z
        .union([
        zod_1.z.lazy(() => UsersRelationFilter_schema_1.UsersRelationFilterObjectSchema),
        zod_1.z.lazy(() => usersWhereInput_schema_1.usersWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.ordersWhereInputObjectSchema = Schema;
