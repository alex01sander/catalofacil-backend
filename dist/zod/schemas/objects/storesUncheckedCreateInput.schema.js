"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUncheckedCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesUncheckedCreateNestedManyWithoutStoresInput_schema_1 = require("./categoriesUncheckedCreateNestedManyWithoutStoresInput.schema");
const customersUncheckedCreateNestedManyWithoutStoresInput_schema_1 = require("./customersUncheckedCreateNestedManyWithoutStoresInput.schema");
const ordersUncheckedCreateNestedManyWithoutStoresInput_schema_1 = require("./ordersUncheckedCreateNestedManyWithoutStoresInput.schema");
const productsUncheckedCreateNestedManyWithoutStoresInput_schema_1 = require("./productsUncheckedCreateNestedManyWithoutStoresInput.schema");
const salesUncheckedCreateNestedManyWithoutStoresInput_schema_1 = require("./salesUncheckedCreateNestedManyWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    domain: zod_1.z.string().optional().nullable(),
    user_id: zod_1.z.string(),
    description: zod_1.z.string().optional().nullable(),
    logo_url: zod_1.z.string().optional().nullable(),
    banner_url: zod_1.z.string().optional().nullable(),
    whatsapp_number: zod_1.z.string().optional().nullable(),
    instagram_url: zod_1.z.string().optional().nullable(),
    theme_color: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    categories: zod_1.z
        .lazy(() => categoriesUncheckedCreateNestedManyWithoutStoresInput_schema_1.categoriesUncheckedCreateNestedManyWithoutStoresInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersUncheckedCreateNestedManyWithoutStoresInput_schema_1.customersUncheckedCreateNestedManyWithoutStoresInputObjectSchema)
        .optional(),
    orders: zod_1.z
        .lazy(() => ordersUncheckedCreateNestedManyWithoutStoresInput_schema_1.ordersUncheckedCreateNestedManyWithoutStoresInputObjectSchema)
        .optional(),
    products: zod_1.z
        .lazy(() => productsUncheckedCreateNestedManyWithoutStoresInput_schema_1.productsUncheckedCreateNestedManyWithoutStoresInputObjectSchema)
        .optional(),
    sales: zod_1.z
        .lazy(() => salesUncheckedCreateNestedManyWithoutStoresInput_schema_1.salesUncheckedCreateNestedManyWithoutStoresInputObjectSchema)
        .optional(),
})
    .strict();
exports.storesUncheckedCreateInputObjectSchema = Schema;
