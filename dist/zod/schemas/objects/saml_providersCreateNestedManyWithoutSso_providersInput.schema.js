"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_providersCreateNestedManyWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_providersCreateWithoutSso_providersInput_schema_1 = require("./saml_providersCreateWithoutSso_providersInput.schema");
const saml_providersUncheckedCreateWithoutSso_providersInput_schema_1 = require("./saml_providersUncheckedCreateWithoutSso_providersInput.schema");
const saml_providersCreateOrConnectWithoutSso_providersInput_schema_1 = require("./saml_providersCreateOrConnectWithoutSso_providersInput.schema");
const saml_providersCreateManySso_providersInputEnvelope_schema_1 = require("./saml_providersCreateManySso_providersInputEnvelope.schema");
const saml_providersWhereUniqueInput_schema_1 = require("./saml_providersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersCreateWithoutSso_providersInput_schema_1.saml_providersCreateWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_providersCreateWithoutSso_providersInput_schema_1.saml_providersCreateWithoutSso_providersInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => saml_providersUncheckedCreateWithoutSso_providersInput_schema_1.saml_providersUncheckedCreateWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_providersUncheckedCreateWithoutSso_providersInput_schema_1.saml_providersUncheckedCreateWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersCreateOrConnectWithoutSso_providersInput_schema_1.saml_providersCreateOrConnectWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_providersCreateOrConnectWithoutSso_providersInput_schema_1.saml_providersCreateOrConnectWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => saml_providersCreateManySso_providersInputEnvelope_schema_1.saml_providersCreateManySso_providersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.saml_providersCreateNestedManyWithoutSso_providersInputObjectSchema = Schema;
