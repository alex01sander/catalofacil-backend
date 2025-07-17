"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sso_domainsCreateNestedManyWithoutSso_providersInputObjectSchema = void 0;
const zod_1 = require("zod");
const sso_domainsCreateWithoutSso_providersInput_schema_1 = require("./sso_domainsCreateWithoutSso_providersInput.schema");
const sso_domainsUncheckedCreateWithoutSso_providersInput_schema_1 = require("./sso_domainsUncheckedCreateWithoutSso_providersInput.schema");
const sso_domainsCreateOrConnectWithoutSso_providersInput_schema_1 = require("./sso_domainsCreateOrConnectWithoutSso_providersInput.schema");
const sso_domainsCreateManySso_providersInputEnvelope_schema_1 = require("./sso_domainsCreateManySso_providersInputEnvelope.schema");
const sso_domainsWhereUniqueInput_schema_1 = require("./sso_domainsWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => sso_domainsCreateManySso_providersInputEnvelope_schema_1.sso_domainsCreateManySso_providersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => sso_domainsWhereUniqueInput_schema_1.sso_domainsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.sso_domainsCreateNestedManyWithoutSso_providersInputObjectSchema = Schema;
