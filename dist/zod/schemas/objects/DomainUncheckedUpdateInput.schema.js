"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUncheckedUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const ProductUncheckedUpdateManyWithoutDomainNestedInput_schema_1 = require("./ProductUncheckedUpdateManyWithoutDomainNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
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
    userId: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    createdAt: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    products: zod_1.z
        .lazy(() => ProductUncheckedUpdateManyWithoutDomainNestedInput_schema_1.ProductUncheckedUpdateManyWithoutDomainNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.DomainUncheckedUpdateInputObjectSchema = Schema;
