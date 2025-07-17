"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const flow_stateCreateNestedOneWithoutSaml_relay_statesInput_schema_1 = require("./flow_stateCreateNestedOneWithoutSaml_relay_statesInput.schema");
const sso_providersCreateNestedOneWithoutSaml_relay_statesInput_schema_1 = require("./sso_providersCreateNestedOneWithoutSaml_relay_statesInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    request_id: zod_1.z.string(),
    for_email: zod_1.z.string().optional().nullable(),
    redirect_to: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    flow_state: zod_1.z
        .lazy(() => flow_stateCreateNestedOneWithoutSaml_relay_statesInput_schema_1.flow_stateCreateNestedOneWithoutSaml_relay_statesInputObjectSchema)
        .optional(),
    sso_providers: zod_1.z.lazy(() => sso_providersCreateNestedOneWithoutSaml_relay_statesInput_schema_1.sso_providersCreateNestedOneWithoutSaml_relay_statesInputObjectSchema),
})
    .strict();
exports.saml_relay_statesCreateInputObjectSchema = Schema;
