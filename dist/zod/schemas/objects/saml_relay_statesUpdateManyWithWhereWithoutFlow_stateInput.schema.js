"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesScalarWhereInput_schema_1 = require("./saml_relay_statesScalarWhereInput.schema");
const saml_relay_statesUpdateManyMutationInput_schema_1 = require("./saml_relay_statesUpdateManyMutationInput.schema");
const saml_relay_statesUncheckedUpdateManyWithoutSaml_relay_statesInput_schema_1 = require("./saml_relay_statesUncheckedUpdateManyWithoutSaml_relay_statesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => saml_relay_statesScalarWhereInput_schema_1.saml_relay_statesScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => saml_relay_statesUpdateManyMutationInput_schema_1.saml_relay_statesUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesUncheckedUpdateManyWithoutSaml_relay_statesInput_schema_1.saml_relay_statesUncheckedUpdateManyWithoutSaml_relay_statesInputObjectSchema),
    ]),
})
    .strict();
exports.saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInputObjectSchema = Schema;
