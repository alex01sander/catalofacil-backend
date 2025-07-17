"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUpdateWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const storesUpdateOneWithoutCustomersNestedInput_schema_1 = require("./storesUpdateOneWithoutCustomersNestedInput.schema");
const ordersUpdateManyWithoutCustomersNestedInput_schema_1 = require("./ordersUpdateManyWithoutCustomersNestedInput.schema");
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
    email: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    phone: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    address: zod_1.z
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
    stores: zod_1.z
        .lazy(() => storesUpdateOneWithoutCustomersNestedInput_schema_1.storesUpdateOneWithoutCustomersNestedInputObjectSchema)
        .optional(),
    orders: zod_1.z
        .lazy(() => ordersUpdateManyWithoutCustomersNestedInput_schema_1.ordersUpdateManyWithoutCustomersNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.customersUpdateWithoutUsersInputObjectSchema = Schema;
