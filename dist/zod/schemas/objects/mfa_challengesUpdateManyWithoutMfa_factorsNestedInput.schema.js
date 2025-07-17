"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesUpdateManyWithoutMfa_factorsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_challengesCreateWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesCreateWithoutMfa_factorsInput.schema");
const mfa_challengesUncheckedCreateWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesUncheckedCreateWithoutMfa_factorsInput.schema");
const mfa_challengesCreateOrConnectWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesCreateOrConnectWithoutMfa_factorsInput.schema");
const mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInput.schema");
const mfa_challengesCreateManyMfa_factorsInputEnvelope_schema_1 = require("./mfa_challengesCreateManyMfa_factorsInputEnvelope.schema");
const mfa_challengesWhereUniqueInput_schema_1 = require("./mfa_challengesWhereUniqueInput.schema");
const mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInput.schema");
const mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInput.schema");
const mfa_challengesScalarWhereInput_schema_1 = require("./mfa_challengesScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesCreateWithoutMfa_factorsInput_schema_1.mfa_challengesCreateWithoutMfa_factorsInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_challengesCreateWithoutMfa_factorsInput_schema_1.mfa_challengesCreateWithoutMfa_factorsInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => mfa_challengesUncheckedCreateWithoutMfa_factorsInput_schema_1.mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_challengesUncheckedCreateWithoutMfa_factorsInput_schema_1.mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesCreateOrConnectWithoutMfa_factorsInput_schema_1.mfa_challengesCreateOrConnectWithoutMfa_factorsInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_challengesCreateOrConnectWithoutMfa_factorsInput_schema_1.mfa_challengesCreateOrConnectWithoutMfa_factorsInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInput_schema_1.mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInput_schema_1.mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => mfa_challengesCreateManyMfa_factorsInputEnvelope_schema_1.mfa_challengesCreateManyMfa_factorsInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInput_schema_1.mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInput_schema_1.mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInput_schema_1.mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInput_schema_1.mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesScalarWhereInput_schema_1.mfa_challengesScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => mfa_challengesScalarWhereInput_schema_1.mfa_challengesScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.mfa_challengesUpdateManyWithoutMfa_factorsNestedInputObjectSchema = Schema;
