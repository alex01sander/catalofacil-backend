"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saml_relay_statesUpdateManyWithoutSso_providersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const saml_relay_statesCreateWithoutSso_providersInput_schema_1 = require("./saml_relay_statesCreateWithoutSso_providersInput.schema");
const saml_relay_statesUncheckedCreateWithoutSso_providersInput_schema_1 = require("./saml_relay_statesUncheckedCreateWithoutSso_providersInput.schema");
const saml_relay_statesCreateOrConnectWithoutSso_providersInput_schema_1 = require("./saml_relay_statesCreateOrConnectWithoutSso_providersInput.schema");
const saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput_schema_1 = require("./saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput.schema");
const saml_relay_statesCreateManySso_providersInputEnvelope_schema_1 = require("./saml_relay_statesCreateManySso_providersInputEnvelope.schema");
const saml_relay_statesWhereUniqueInput_schema_1 = require("./saml_relay_statesWhereUniqueInput.schema");
const saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput_schema_1 = require("./saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput.schema");
const saml_relay_statesUpdateManyWithWhereWithoutSso_providersInput_schema_1 = require("./saml_relay_statesUpdateManyWithWhereWithoutSso_providersInput.schema");
const saml_relay_statesScalarWhereInput_schema_1 = require("./saml_relay_statesScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput_schema_1.saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput_schema_1.saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => saml_relay_statesCreateManySso_providersInputEnvelope_schema_1.saml_relay_statesCreateManySso_providersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesWhereUniqueInput_schema_1.saml_relay_statesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput_schema_1.saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput_schema_1.saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesUpdateManyWithWhereWithoutSso_providersInput_schema_1.saml_relay_statesUpdateManyWithWhereWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => saml_relay_statesUpdateManyWithWhereWithoutSso_providersInput_schema_1.saml_relay_statesUpdateManyWithWhereWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => saml_relay_statesScalarWhereInput_schema_1.saml_relay_statesScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => saml_relay_statesScalarWhereInput_schema_1.saml_relay_statesScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.saml_relay_statesUpdateManyWithoutSso_providersNestedInputObjectSchema = Schema;
