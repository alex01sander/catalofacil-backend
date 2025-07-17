"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesCreateWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateNestedOneWithoutCategoriesInput_schema_1 = require("./usersCreateNestedOneWithoutCategoriesInput.schema");
const productsCreateNestedManyWithoutCategoriesInput_schema_1 = require("./productsCreateNestedManyWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    users: zod_1.z.lazy(() => usersCreateNestedOneWithoutCategoriesInput_schema_1.usersCreateNestedOneWithoutCategoriesInputObjectSchema),
    products: zod_1.z
        .lazy(() => productsCreateNestedManyWithoutCategoriesInput_schema_1.productsCreateNestedManyWithoutCategoriesInputObjectSchema)
        .optional(),
})
    .strict();
exports.categoriesCreateWithoutStoresInputObjectSchema = Schema;
