"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersUpdateInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const NullableDateTimeFieldUpdateOperationsInput_schema_1 = require("./NullableDateTimeFieldUpdateOperationsInput.schema");
const saml_providersUpdateManyWithoutSso_providersNestedInput_schema_1 = require("./saml_providersUpdateManyWithoutSso_providersNestedInput.schema");
const saml_relay_statesUpdateManyWithoutSso_providersNestedInput_schema_1 = require("./saml_relay_statesUpdateManyWithoutSso_providersNestedInput.schema");
const sso_domainsUpdateManyWithoutSso_providersNestedInput_schema_1 = require("./sso_domainsUpdateManyWithoutSso_providersNestedInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema),
    ])
        .optional(),
    resource_id: zod_1.z
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
    saml_providers: zod_1.z
        .lazy(() => saml_providersUpdateManyWithoutSso_providersNestedInput_schema_1.saml_providersUpdateManyWithoutSso_providersNestedInputObjectSchema)
        .optional(),
    saml_relay_states: zod_1.z
        .lazy(() => saml_relay_statesUpdateManyWithoutSso_providersNestedInput_schema_1.saml_relay_statesUpdateManyWithoutSso_providersNestedInputObjectSchema)
        .optional(),
    sso_domains: zod_1.z
        .lazy(() => sso_domainsUpdateManyWithoutSso_providersNestedInput_schema_1.sso_domainsUpdateManyWithoutSso_providersNestedInputObjectSchema)
        .optional(),
})
    .strict();
exports.sso_providersUpdateInputObjectSchema = Schema;
