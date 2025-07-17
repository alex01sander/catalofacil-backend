"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesCreateOrConnectWithoutFlow_stateInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesWhereUniqueInput_schema_1 = require("./saml_relay_statesWhereUniqueInput.schema");
const saml_relay_statesCreateWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesCreateWithoutFlow_stateInput.schema");
const saml_relay_statesUncheckedCreateWithoutFlow_stateInput_schema_1 = require("./saml_relay_statesUncheckedCreateWithoutFlow_stateInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => saml_relay_statesCreateWithoutFlow_stateInput_schema_1.saml_relay_statesCreateWithoutFlow_stateInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesUncheckedCreateWithoutFlow_stateInput_schema_1.saml_relay_statesUncheckedCreateWithoutFlow_stateInputObjectSchema),
    ]),
})
    .strict();
exports.saml_relay_statesCreateOrConnectWithoutFlow_stateInputObjectSchema = Schema;
