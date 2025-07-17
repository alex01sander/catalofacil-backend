"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpdateWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const categoriesUpdateManyWithoutStoresNestedInput_schema_1 = require("./categoriesUpdateManyWithoutStoresNestedInput.schema");
const customersUpdateManyWithoutStoresNestedInput_schema_1 = require("./customersUpdateManyWithoutStoresNestedInput.schema");
const ordersUpdateManyWithoutStoresNestedInput_schema_1 = require("./ordersUpdateManyWithoutStoresNestedInput.schema");
const productsUpdateManyWithoutStoresNestedInput_schema_1 = require("./productsUpdateManyWithoutStoresNestedInput.schema");
const salesUpdateManyWithoutStoresNestedInput_schema_1 = require("./salesUpdateManyWithoutStoresNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    name: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    slug: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    domain: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    description: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    logo_url: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    banner_url: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    whatsapp_number: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    instagram_url: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    theme_color: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    created_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    updated_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    categories: zod_1.z
        .lazy(() => categoriesUpdateManyWithoutStoresNestedInput_schema_1.categoriesUpdateManyWithoutStoresNestedInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersUpdateManyWithoutStoresNestedInput_schema_1.customersUpdateManyWithoutStoresNestedInputObjectSchema)
        .optional(),
    orders: zod_1.z
        .lazy(() => ordersUpdateManyWithoutStoresNestedInput_schema_1.ordersUpdateManyWithoutStoresNestedInputObjectSchema)
        .optional(),
    products: zod_1.z
        .lazy(() => productsUpdateManyWithoutStoresNestedInput_schema_1.productsUpdateManyWithoutStoresNestedInputObjectSchema)
        .optional(),
    sales: zod_1.z
        .lazy(() => salesUpdateManyWithoutStoresNestedInput_schema_1.salesUpdateManyWithoutStoresNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.storesUpdateWithoutUsersInputObjectSchema = Schema;
