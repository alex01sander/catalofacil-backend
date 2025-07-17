"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsCreateNestedManyWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsCreateWithoutUsersInput_schema_1 = require("./mfa_factorsCreateWithoutUsersInput.schema");
const mfa_factorsUncheckedCreateWithoutUsersInput_schema_1 = require("./mfa_factorsUncheckedCreateWithoutUsersInput.schema");
const mfa_factorsCreateOrConnectWithoutUsersInput_schema_1 = require("./mfa_factorsCreateOrConnectWithoutUsersInput.schema");
const mfa_factorsCreateManyUsersInputEnvelope_schema_1 = require("./mfa_factorsCreateManyUsersInputEnvelope.schema");
const mfa_factorsWhereUniqueInput_schema_1 = require("./mfa_factorsWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsCreateWithoutUsersInput_schema_1.mfa_factorsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsCreateWithoutUsersInput_schema_1.mfa_factorsCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => mfa_factorsUncheckedCreateWithoutUsersInput_schema_1.mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_factorsUncheckedCreateWithoutUsersInput_schema_1.mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsCreateOrConnectWithoutUsersInput_schema_1.mfa_factorsCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_factorsCreateOrConnectWithoutUsersInput_schema_1.mfa_factorsCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => mfa_factorsCreateManyUsersInputEnvelope_schema_1.mfa_factorsCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.mfa_factorsCreateNestedManyWithoutUsersInputObjectSchema = Schema;
