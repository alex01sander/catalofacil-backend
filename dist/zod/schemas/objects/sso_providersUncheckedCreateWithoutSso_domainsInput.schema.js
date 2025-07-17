"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_providersUncheckedCreateNestedManyWithoutSso_providersInput_schema_1 = require("./saml_providersUncheckedCreateNestedManyWithoutSso_providersInput.schema");
const saml_relay_statesUncheckedCreateNestedManyWithoutSso_providersInput_schema_1 = require("./saml_relay_statesUncheckedCreateNestedManyWithoutSso_providersInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    resource_id: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    saml_providers: zod_1.z
        .lazy(() => saml_providersUncheckedCreateNestedManyWithoutSso_providersInput_schema_1.saml_providersUncheckedCreateNestedManyWithoutSso_providersInputObjectSchema)
        .optional(),
    saml_relay_states: zod_1.z
        .lazy(() => saml_relay_statesUncheckedCreateNestedManyWithoutSso_providersInput_schema_1.saml_relay_statesUncheckedCreateNestedManyWithoutSso_providersInputObjectSchema)
        .optional(),
})
    .strict();
exports.sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema = Schema;
