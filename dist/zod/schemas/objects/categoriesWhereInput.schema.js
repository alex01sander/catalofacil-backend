"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const DateTimeNullableFilter_schema_1 = require("./DateTimeNullableFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const StoresRelationFilter_schema_1 = require("./StoresRelationFilter.schema");
const storesWhereInput_schema_1 = require("./storesWhereInput.schema");
const UsersRelationFilter_schema_1 = require("./UsersRelationFilter.schema");
const usersWhereInput_schema_1 = require("./usersWhereInput.schema");
const ProductsListRelationFilter_schema_1 = require("./ProductsListRelationFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.categoriesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.categoriesWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.categoriesWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.categoriesWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.categoriesWhereInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z.union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()]).optional(),
    user_id: zod_1.z
        .union([zod_1.z.lazy(() => UuidFilter_schema_1.UuidFilterObjectSchema), zod_1.z.string()])
        .optional(),
    name: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
    color: zod_1.z
        .union([zod_1.z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), zod_1.z.string()])
        .optional()
        .nullable(),
    image: zod_1.z
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
    products: zod_1.z.lazy(() => ProductsListRelationFilter_schema_1.ProductsListRelationFilterObjectSchema).optional(),
})
    .strict();
exports.categoriesWhereInputObjectSchema = Schema;
