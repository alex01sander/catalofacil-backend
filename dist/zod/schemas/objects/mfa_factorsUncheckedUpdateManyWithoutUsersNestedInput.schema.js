"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsCreateWithoutUsersInput_schema_1 = require("./mfa_factorsCreateWithoutUsersInput.schema");
const mfa_factorsUncheckedCreateWithoutUsersInput_schema_1 = require("./mfa_factorsUncheckedCreateWithoutUsersInput.schema");
const mfa_factorsCreateOrConnectWithoutUsersInput_schema_1 = require("./mfa_factorsCreateOrConnectWithoutUsersInput.schema");
const mfa_factorsUpsertWithWhereUniqueWithoutUsersInput_schema_1 = require("./mfa_factorsUpsertWithWhereUniqueWithoutUsersInput.schema");
const mfa_factorsCreateManyUsersInputEnvelope_schema_1 = require("./mfa_factorsCreateManyUsersInputEnvelope.schema");
const mfa_factorsWhereUniqueInput_schema_1 = require("./mfa_factorsWhereUniqueInput.schema");
const mfa_factorsUpdateWithWhereUniqueWithoutUsersInput_schema_1 = require("./mfa_factorsUpdateWithWhereUniqueWithoutUsersInput.schema");
const mfa_factorsUpdateManyWithWhereWithoutUsersInput_schema_1 = require("./mfa_factorsUpdateManyWithWhereWithoutUsersInput.schema");
const mfa_factorsScalarWhereInput_schema_1 = require("./mfa_factorsScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsUpsertWithWhereUniqueWithoutUsersInput_schema_1.mfa_factorsUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_factorsUpsertWithWhereUniqueWithoutUsersInput_schema_1.mfa_factorsUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => mfa_factorsCreateManyUsersInputEnvelope_schema_1.mfa_factorsCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsUpdateWithWhereUniqueWithoutUsersInput_schema_1.mfa_factorsUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_factorsUpdateWithWhereUniqueWithoutUsersInput_schema_1.mfa_factorsUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsUpdateManyWithWhereWithoutUsersInput_schema_1.mfa_factorsUpdateManyWithWhereWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_factorsUpdateManyWithWhereWithoutUsersInput_schema_1.mfa_factorsUpdateManyWithWhereWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_factorsScalarWhereInput_schema_1.mfa_factorsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsScalarWhereInput_schema_1.mfa_factorsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.mfa_factorsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
