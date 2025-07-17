"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesUncheckedCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsUncheckedCreateNestedManyWithoutCategoriesInput_schema_1 = require("./productsUncheckedCreateNestedManyWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id: zod_1.z.string(),
    name: zod_1.z.string(),
    color: zod_1.z.string().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    store_id: zod_1.z.string().optional().nullable(),
    products: zod_1.z
        .lazy(() => productsUncheckedCreateNestedManyWithoutCategoriesInput_schema_1.productsUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema)
        .optional(),
})
    .strict();
exports.categoriesUncheckedCreateInputObjectSchema = Schema;
