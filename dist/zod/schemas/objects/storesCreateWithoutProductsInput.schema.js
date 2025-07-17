"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesCreateNestedManyWithoutStoresInput_schema_1 = require("./categoriesCreateNestedManyWithoutStoresInput.schema");
const customersCreateNestedManyWithoutStoresInput_schema_1 = require("./customersCreateNestedManyWithoutStoresInput.schema");
const ordersCreateNestedManyWithoutStoresInput_schema_1 = require("./ordersCreateNestedManyWithoutStoresInput.schema");
const salesCreateNestedManyWithoutStoresInput_schema_1 = require("./salesCreateNestedManyWithoutStoresInput.schema");
const usersCreateNestedOneWithoutStoresInput_schema_1 = require("./usersCreateNestedOneWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    domain: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
    logo_url: zod_1.z.string().optional().nullable(),
    banner_url: zod_1.z.string().optional().nullable(),
    whatsapp_number: zod_1.z.string().optional().nullable(),
    instagram_url: zod_1.z.string().optional().nullable(),
    theme_color: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    categories: zod_1.z
        .lazy(() => categoriesCreateNestedManyWithoutStoresInput_schema_1.categoriesCreateNestedManyWithoutStoresInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersCreateNestedManyWithoutStoresInput_schema_1.customersCreateNestedManyWithoutStoresInputObjectSchema)
        .optional(),
    orders: zod_1.z
        .lazy(() => ordersCreateNestedManyWithoutStoresInput_schema_1.ordersCreateNestedManyWithoutStoresInputObjectSchema)
        .optional(),
    sales: zod_1.z
        .lazy(() => salesCreateNestedManyWithoutStoresInput_schema_1.salesCreateNestedManyWithoutStoresInputObjectSchema)
        .optional(),
    users: zod_1.z.lazy(() => usersCreateNestedOneWithoutStoresInput_schema_1.usersCreateNestedOneWithoutStoresInputObjectSchema),
})
    .strict();
exports.storesCreateWithoutProductsInputObjectSchema = Schema;
