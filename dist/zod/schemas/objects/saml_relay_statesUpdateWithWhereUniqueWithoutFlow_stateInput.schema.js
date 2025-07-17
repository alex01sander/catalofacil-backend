"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesWhereUniqueInput_schema_1 = require("./saml_relay_statesWhereUniqueInput.schema");
const saml_relay_statesUpdateWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesUpdateWithoutFlow_stateInput.schema");
const saml_relay_statesUncheckedUpdateWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesUncheckedUpdateWithoutFlow_stateInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => saml_relay_statesUpdateWithoutFlow_stateInput_schema_1.saml_relay_statesUpdateWithoutFlow_stateInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesUncheckedUpdateWithoutFlow_stateInput_schema_1.saml_relay_statesUncheckedUpdateWithoutFlow_stateInputObjectSchema),
    ]),
})
    .strict();
exports.saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInputObjectSchema = Schema;
