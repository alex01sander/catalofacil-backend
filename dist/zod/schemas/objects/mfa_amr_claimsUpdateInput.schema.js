"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const sessionsUpdateOneRequiredWithoutMfa_amr_claimsNestedInput_schema_1 = require("./sessionsUpdateOneRequiredWithoutMfa_amr_claimsNestedInput.schema");
const Schema = zod_1.z
    .object({
    created_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    updated_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    authentication_method: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    sessions: zod_1.z
        .lazy(() => sessionsUpdateOneRequiredWithoutMfa_amr_claimsNestedInput_schema_1.sessionsUpdateOneRequiredWithoutMfa_amr_claimsNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.mfa_amr_claimsUpdateInputObjectSchema = Schema;
