"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUncheckedCreateWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateimagesInput_schema_1 = require("./productsCreateimagesInput.schema");
const order_itemsUncheckedCreateNestedManyWithoutProductsInput_schema_1 = require("./order_itemsUncheckedCreateNestedManyWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    user_id: zod_1.z.string(),
    category_id: zod_1.z.string().optional().nullable(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional().nullable(),
    price: zod_1.z.number().optional(),
    stock: zod_1.z.number().optional(),
    is_active: zod_1.z.boolean().optional().nullable(),
    image: zod_1.z.string().optional().nullable(),
    images: zod_1.z
        .union([
        zod_1.z.lazy(() => productsCreateimagesInput_schema_1.productsCreateimagesInputObjectSchema),
        zod_1.z.string().array(),
    ])
        .optional(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    order_items: zod_1.z
        .lazy(() => order_itemsUncheckedCreateNestedManyWithoutProductsInput_schema_1.order_itemsUncheckedCreateNestedManyWithoutProductsInputObjectSchema)
        .optional(),
})
    .strict();
exports.productsUncheckedCreateWithoutStoresInputObjectSchema = Schema;
