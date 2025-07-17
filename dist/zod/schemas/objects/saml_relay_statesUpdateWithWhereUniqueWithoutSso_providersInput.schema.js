"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesWhereUniqueInput_schema_1 = require("./saml_relay_statesWhereUniqueInput.schema");
const saml_relay_statesUpdateWithoutSso_providersInput_schema_1 = require("./saml_relay_statesUpdateWithoutSso_providersInput.schema");
const saml_relay_statesUncheckedUpdateWithoutSso_providersInput_schema_1 = require("./saml_relay_statesUncheckedUpdateWithoutSso_providersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => saml_relay_statesUpdateWithoutSso_providersInput_schema_1.saml_relay_statesUpdateWithoutSso_providersInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesUncheckedUpdateWithoutSso_providersInput_schema_1.saml_relay_statesUncheckedUpdateWithoutSso_providersInputObjectSchema),
    ]),
})
    .strict();
exports.saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema = Schema;
