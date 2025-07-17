"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUpdateWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const UserUpdateOneRequiredWithoutDomainsNestedInput_schema_1 = require("./UserUpdateOneRequiredWithoutDomainsNestedInput.schema");
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
    createdAt: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    user: zod_1.z
        .lazy(() => UserUpdateOneRequiredWithoutDomainsNestedInput_schema_1.UserUpdateOneRequiredWithoutDomainsNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.DomainUpdateWithoutProductsInputObjectSchema = Schema;
