"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const DecimalFieldUpdateOperationsInput_schema_1 = require("./DecimalFieldUpdateOperationsInput.schema");
const IntFieldUpdateOperationsInput_schema_1 = require("./IntFieldUpdateOperationsInput.schema");
const NullableBoolFieldUpdateOperationsInput_schema_1 = require("./NullableBoolFieldUpdateOperationsInput.schema");
const productsUpdateimagesInput_schema_1 = require("./productsUpdateimagesInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const order_itemsUpdateManyWithoutProductsNestedInput_schema_1 = require("./order_itemsUpdateManyWithoutProductsNestedInput.schema");
const categoriesUpdateOneWithoutProductsNestedInput_schema_1 = require("./categoriesUpdateOneWithoutProductsNestedInput.schema");
const storesUpdateOneWithoutProductsNestedInput_schema_1 = require("./storesUpdateOneWithoutProductsNestedInput.schema");
const usersUpdateOneRequiredWithoutProductsNestedInput_schema_1 = require("./usersUpdateOneRequiredWithoutProductsNestedInput.schema");
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
    description: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    price: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => DecimalFieldUpdateOperationsInput_schema_1.DecimalFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    stock: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => IntFieldUpdateOperationsInput_schema_1.IntFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    is_active: zod_1.z
        .union([
        zod_1.z.boolean(),
        zod_1.z.lazy(() => NullableBoolFieldUpdateOperationsInput_schema_1.NullableBoolFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    image: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    images: zod_1.z
        .union([
        zod_1.z.lazy(() => productsUpdateimagesInput_schema_1.productsUpdateimagesInputObjectSchema),
        zod_1.z.string().array(),
    ])
        .optional(),
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
    order_items: zod_1.z
        .lazy(() => order_itemsUpdateManyWithoutProductsNestedInput_schema_1.order_itemsUpdateManyWithoutProductsNestedInputObjectSchema)
        .optional(),
    categories: zod_1.z
        .lazy(() => categoriesUpdateOneWithoutProductsNestedInput_schema_1.categoriesUpdateOneWithoutProductsNestedInputObjectSchema)
        .optional(),
    stores: zod_1.z
        .lazy(() => storesUpdateOneWithoutProductsNestedInput_schema_1.storesUpdateOneWithoutProductsNestedInputObjectSchema)
        .optional(),
    users: zod_1.z
        .lazy(() => usersUpdateOneRequiredWithoutProductsNestedInput_schema_1.usersUpdateOneRequiredWithoutProductsNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.productsUpdateInputObjectSchema = Schema;
