"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const CategoriesListRelationFilter_schema_1 = require("./CategoriesListRelationFilter.schema");
const CustomersListRelationFilter_schema_1 = require("./CustomersListRelationFilter.schema");
const OrdersListRelationFilter_schema_1 = require("./OrdersListRelationFilter.schema");
const ProductsListRelationFilter_schema_1 = require("./ProductsListRelationFilter.schema");
const SalesListRelationFilter_schema_1 = require("./SalesListRelationFilter.schema");
const UsersRelationFilter_schema_1 = require("./UsersRelationFilter.schema");
const usersWhereInput_schema_1 = require("./usersWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.storesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.storesWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.storesWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.storesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.storesWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    name: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    slug: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    domain: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    description: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    logo_url: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    banner_url: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    whatsapp_number: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    instagram_url: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    theme_color: zod_1.z
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
    categories: zod_1.z
        .lazy(() => CategoriesListRelationFilter_schema_1.CategoriesListRelationFilterObjectSchema)
        .optional(),
    customers: zod_1.z.lazy(() => CustomersListRelationFilter_schema_1.CustomersListRelationFilterObjectSchema).optional(),
    orders: zod_1.z.lazy(() => OrdersListRelationFilter_schema_1.OrdersListRelationFilterObjectSchema).optional(),
    products: zod_1.z.lazy(() => ProductsListRelationFilter_schema_1.ProductsListRelationFilterObjectSchema).optional(),
    sales: zod_1.z.lazy(() => SalesListRelationFilter_schema_1.SalesListRelationFilterObjectSchema).optional(),
    users: zod_1.z
        .union([
        zod_1.z.lazy(() => UsersRelationFilter_schema_1.UsersRelationFilterObjectSchema),
        zod_1.z.lazy(() => usersWhereInput_schema_1.usersWhereInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.storesWhereInputObjectSchema = Schema;
