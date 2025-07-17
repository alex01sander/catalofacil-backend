"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const sso_providersUpdateOneRequiredWithoutSso_domainsNestedInput_schema_1 = require("./sso_providersUpdateOneRequiredWithoutSso_domainsNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    domain: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
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
    sso_providers: zod_1.z
        .lazy(() => sso_providersUpdateOneRequiredWithoutSso_domainsNestedInput_schema_1.sso_providersUpdateOneRequiredWithoutSso_domainsNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.sso_domainsUpdateInputObjectSchema = Schema;
