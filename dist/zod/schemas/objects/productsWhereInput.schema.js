"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const DecimalFilter_schema_1 = require("./DecimalFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const BoolNullableFilter_schema_1 = require("./BoolNullableFilter.schema");
const StringNullableListFilter_schema_1 = require("./StringNullableListFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const Order_itemsListRelationFilter_schema_1 = require("./Order_itemsListRelationFilter.schema");
const CategoriesRelationFilter_schema_1 = require("./CategoriesRelationFilter.schema");
const categoriesWhereInput_schema_1 = require("./categoriesWhereInput.schema");
const StoresRelationFilter_schema_1 = require("./StoresRelationFilter.schema");
const storesWhereInput_schema_1 = require("./storesWhereInput.schema");
const UsersRelationFilter_schema_1 = require("./UsersRelationFilter.schema");
const usersWhereInput_schema_1 = require("./usersWhereInput.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.productsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.productsWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.productsWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.productsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.productsWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    category_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidNullableFilter_schema_1.UuidNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    name: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    description: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    price: zod_1.z
        .union([zod_1.z.lazy(() => DecimalFilter_schema_1.DecimalFilterObjectSchema), zod_1.z.number()])
        .optional(),
    stock: zod_1.z
        .union([zod_1.z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), zod_1.z.number()])
        .optional(),
    is_active: zod_1.z
        .union([zod_1.z.lazy(() => BoolNullableFilter_schema_1.BoolNullableFilterObjectSchema), zod_1.z.boolean()])
        .optional()
        .nullable(),
    image: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    images: zod_1.z.lazy(() => StringNullableListFilter_schema_1.StringNullableListFilterObjectSchema).optional(),
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
    categories: zod_1.z
        .union([
        zod_1.z.lazy(() => CategoriesRelationFilter_schema_1.CategoriesRelationFilterObjectSchema),
        zod_1.z.lazy(() => categoriesWhereInput_schema_1.categoriesWhereInputObjectSchema),
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
exports.productsWhereInputObjectSchema = Schema;
