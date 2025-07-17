"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsUncheckedUpdateManyWithoutSso_providersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_domainsCreateWithoutSso_providersInput_schema_1 = require("./sso_domainsCreateWithoutSso_providersInput.schema");
const sso_domainsUncheckedCreateWithoutSso_providersInput_schema_1 = require("./sso_domainsUncheckedCreateWithoutSso_providersInput.schema");
const sso_domainsCreateOrConnectWithoutSso_providersInput_schema_1 = require("./sso_domainsCreateOrConnectWithoutSso_providersInput.schema");
const sso_domainsUpsertWithWhereUniqueWithoutSso_providersInput_schema_1 = require("./sso_domainsUpsertWithWhereUniqueWithoutSso_providersInput.schema");
const sso_domainsCreateManySso_providersInputEnvelope_schema_1 = require("./sso_domainsCreateManySso_providersInputEnvelope.schema");
const sso_domainsWhereUniqueInput_schema_1 = require("./sso_domainsWhereUniqueInput.schema");
const sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput_schema_1 = require("./sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput.schema");
const sso_domainsUpdateManyWithWhereWithoutSso_providersInput_schema_1 = require("./sso_domainsUpdateManyWithWhereWithoutSso_providersInput.schema");
const sso_domainsScalarWhereInput_schema_1 = require("./sso_domainsScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsCreateWithoutSso_providersInput_schema_1.sso_domainsCreateWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => sso_domainsCreateWithoutSso_providersInput_schema_1.sso_domainsCreateWithoutSso_providersInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => sso_domainsUncheckedCreateWithoutSso_providersInput_schema_1.sso_domainsUncheckedCreateWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => sso_domainsUncheckedCreateWithoutSso_providersInput_schema_1.sso_domainsUncheckedCreateWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsCreateOrConnectWithoutSso_providersInput_schema_1.sso_domainsCreateOrConnectWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => sso_domainsCreateOrConnectWithoutSso_providersInput_schema_1.sso_domainsCreateOrConnectWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsUpsertWithWhereUniqueWithoutSso_providersInput_schema_1.sso_domainsUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => sso_domainsUpsertWithWhereUniqueWithoutSso_providersInput_schema_1.sso_domainsUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => sso_domainsCreateManySso_providersInputEnvelope_schema_1.sso_domainsCreateManySso_providersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput_schema_1.sso_domainsUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput_schema_1.sso_domainsUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsUpdateManyWithWhereWithoutSso_providersInput_schema_1.sso_domainsUpdateManyWithWhereWithoutSso_providersInputObjectSchema),
        zod_1.z
            .lazy(() => sso_domainsUpdateManyWithWhereWithoutSso_providersInput_schema_1.sso_domainsUpdateManyWithWhereWithoutSso_providersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsScalarWhereInput_schema_1.sso_domainsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => sso_domainsScalarWhereInput_schema_1.sso_domainsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.sso_domainsUncheckedUpdateManyWithoutSso_providersNestedInputObjectSchema = Schema;
