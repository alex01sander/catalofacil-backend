"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsUncheckedUpdateWithoutRefresh_tokensInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const aal_level_schema_1 = require("../enums/aal_level.schema");
const NullableEnumaal_levelFieldUpdateOperationsInput_schema_1 = require("./NullableEnumaal_levelFieldUpdateOperationsInput.schema");
const mfa_amr_claimsUncheckedUpdateManyWithoutSessionsNestedInput_schema_1 = require("./mfa_amr_claimsUncheckedUpdateManyWithoutSessionsNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    user_id: zod_1.z
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
    factor_id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    aal: zod_1.z
        .union([
        zod_1.z.lazy(() => aal_level_schema_1.aal_levelSchema),
        zod_1.z.lazy(() => NullableEnumaal_levelFieldUpdateOperationsInput_schema_1.NullableEnumaal_levelFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    not_after: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    refreshed_at: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NullableDateTimeFieldUpdateOperationsInput_schema_1.NullableDateTimeFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    user_agent: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    ip: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    tag: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    mfa_amr_claims: zod_1.z
        .lazy(() => mfa_amr_claimsUncheckedUpdateManyWithoutSessionsNestedInput_schema_1.mfa_amr_claimsUncheckedUpdateManyWithoutSessionsNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.sessionsUncheckedUpdateWithoutRefresh_tokensInputObjectSchema = Schema;
