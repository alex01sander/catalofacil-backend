"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const DecimalFieldUpdateOperationsInput_schema_1 = require("./DecimalFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const order_itemsUpdateManyWithoutOrdersNestedInput_schema_1 = require("./order_itemsUpdateManyWithoutOrdersNestedInput.schema");
const customersUpdateOneWithoutOrdersNestedInput_schema_1 = require("./customersUpdateOneWithoutOrdersNestedInput.schema");
const storesUpdateOneWithoutOrdersNestedInput_schema_1 = require("./storesUpdateOneWithoutOrdersNestedInput.schema");
const usersUpdateOneRequiredWithoutOrdersNestedInput_schema_1 = require("./usersUpdateOneRequiredWithoutOrdersNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    customer_name: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    customer_email: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    customer_phone: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    total_amount: zod_1.z
        .union([
        zod_1.z.number(),
        zod_1.z.lazy(() => DecimalFieldUpdateOperationsInput_schema_1.DecimalFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    status: zod_1.z
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
    order_items: zod_1.z
        .lazy(() => order_itemsUpdateManyWithoutOrdersNestedInput_schema_1.order_itemsUpdateManyWithoutOrdersNestedInputObjectSchema)
        .optional(),
    customers: zod_1.z
        .lazy(() => customersUpdateOneWithoutOrdersNestedInput_schema_1.customersUpdateOneWithoutOrdersNestedInputObjectSchema)
        .optional(),
    stores: zod_1.z
        .lazy(() => storesUpdateOneWithoutOrdersNestedInput_schema_1.storesUpdateOneWithoutOrdersNestedInputObjectSchema)
        .optional(),
    users: zod_1.z
        .lazy(() => usersUpdateOneRequiredWithoutOrdersNestedInput_schema_1.usersUpdateOneRequiredWithoutOrdersNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.ordersUpdateInputObjectSchema = Schema;
