"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const flow_stateUpdateOneWithoutSaml_relay_statesNestedInput_schema_1 = require("./flow_stateUpdateOneWithoutSaml_relay_statesNestedInput.schema");
const sso_providersUpdateOneRequiredWithoutSaml_relay_statesNestedInput_schema_1 = require("./sso_providersUpdateOneRequiredWithoutSaml_relay_statesNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    request_id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    for_email: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional()
        .nullable(),
    redirect_to: zod_1.z
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
    flow_state: zod_1.z
        .lazy(() => flow_stateUpdateOneWithoutSaml_relay_statesNestedInput_schema_1.flow_stateUpdateOneWithoutSaml_relay_statesNestedInputObjectSchema)
        .optional(),
    sso_providers: zod_1.z
        .lazy(() => sso_providersUpdateOneRequiredWithoutSaml_relay_statesNestedInput_schema_1.sso_providersUpdateOneRequiredWithoutSaml_relay_statesNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.saml_relay_statesUpdateInputObjectSchema = Schema;
