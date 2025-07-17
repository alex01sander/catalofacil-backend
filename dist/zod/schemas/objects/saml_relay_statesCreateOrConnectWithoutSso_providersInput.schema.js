"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesCreateOrConnectWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesWhereUniqueInput_schema_1 = require("./saml_relay_statesWhereUniqueInput.schema");
const saml_relay_statesCreateWithoutSso_providersInput_schema_1 = require("./saml_relay_statesCreateWithoutSso_providersInput.schema");
const saml_relay_statesUncheckedCreateWithoutSso_providersInput_schema_1 = require("./saml_relay_statesUncheckedCreateWithoutSso_providersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => saml_relay_statesCreateWithoutSso_providersInput_schema_1.saml_relay_statesCreateWithoutSso_providersInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesUncheckedCreateWithoutSso_providersInput_schema_1.saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema),
    ]),
})
    .strict();
exports.saml_relay_statesCreateOrConnectWithoutSso_providersInputObjectSchema = Schema;
