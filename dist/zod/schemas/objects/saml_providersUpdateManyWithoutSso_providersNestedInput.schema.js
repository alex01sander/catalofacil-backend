"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_providersUpdateManyWithoutSso_providersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_providersCreateWithoutSso_providersInput_schema_1 = require("./saml_providersCreateWithoutSso_providersInput.schema");
const saml_providersUncheckedCreateWithoutSso_providersInput_schema_1 = require("./saml_providersUncheckedCreateWithoutSso_providersInput.schema");
const saml_providersCreateOrConnectWithoutSso_providersInput_schema_1 = require("./saml_providersCreateOrConnectWithoutSso_providersInput.schema");
const saml_providersUpsertWithWhereUniqueWithoutSso_providersInput_schema_1 = require("./saml_providersUpsertWithWhereUniqueWithoutSso_providersInput.schema");
const saml_providersCreateManySso_providersInputEnvelope_schema_1 = require("./saml_providersCreateManySso_providersInputEnvelope.schema");
const saml_providersWhereUniqueInput_schema_1 = require("./saml_providersWhereUniqueInput.schema");
const saml_providersUpdateWithWhereUniqueWithoutSso_providersInput_schema_1 = require("./saml_providersUpdateWithWhereUniqueWithoutSso_providersInput.schema");
const saml_providersUpdateManyWithWhereWithoutSso_providersInput_schema_1 = require("./saml_providersUpdateManyWithWhereWithoutSso_providersInput.schema");
const saml_providersScalarWhereInput_schema_1 = require("./saml_providersScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersUpsertWithWhereUniqueWithoutSso_providersInput_schema_1.saml_providersUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_providersUpsertWithWhereUniqueWithoutSso_providersInput_schema_1.saml_providersUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => saml_providersCreateManySso_providersInputEnvelope_schema_1.saml_providersCreateManySso_providersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_providersWhereUniqueInput_schema_1.saml_providersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersUpdateWithWhereUniqueWithoutSso_providersInput_schema_1.saml_providersUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_providersUpdateWithWhereUniqueWithoutSso_providersInput_schema_1.saml_providersUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersUpdateManyWithWhereWithoutSso_providersInput_schema_1.saml_providersUpdateManyWithWhereWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_providersUpdateManyWithWhereWithoutSso_providersInput_schema_1.saml_providersUpdateManyWithWhereWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_providersScalarWhereInput_schema_1.saml_providersScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => saml_providersScalarWhereInput_schema_1.saml_providersScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.saml_providersUpdateManyWithoutSso_providersNestedInputObjectSchema = Schema;
