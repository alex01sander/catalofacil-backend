"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesCreateNestedManyWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesCreateWithoutSso_providersInput_schema_1 = require("./saml_relay_statesCreateWithoutSso_providersInput.schema");
const saml_relay_statesUncheckedCreateWithoutSso_providersInput_schema_1 = require("./saml_relay_statesUncheckedCreateWithoutSso_providersInput.schema");
const saml_relay_statesCreateOrConnectWithoutSso_providersInput_schema_1 = require("./saml_relay_statesCreateOrConnectWithoutSso_providersInput.schema");
const saml_relay_statesCreateManySso_providersInputEnvelope_schema_1 = require("./saml_relay_statesCreateManySso_providersInputEnvelope.schema");
const saml_relay_statesWhereUniqueInput_schema_1 = require("./saml_relay_statesWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesCreateWithoutSso_providersInput_schema_1.saml_relay_statesCreateWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesCreateWithoutSso_providersInput_schema_1.saml_relay_statesCreateWithoutSso_providersInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => saml_relay_statesUncheckedCreateWithoutSso_providersInput_schema_1.saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesUncheckedCreateWithoutSso_providersInput_schema_1.saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesCreateOrConnectWithoutSso_providersInput_schema_1.saml_relay_statesCreateOrConnectWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesCreateOrConnectWithoutSso_providersInput_schema_1.saml_relay_statesCreateOrConnectWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => saml_relay_statesCreateManySso_providersInputEnvelope_schema_1.saml_relay_statesCreateManySso_providersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.saml_relay_statesCreateNestedManyWithoutSso_providersInputObjectSchema = Schema;
