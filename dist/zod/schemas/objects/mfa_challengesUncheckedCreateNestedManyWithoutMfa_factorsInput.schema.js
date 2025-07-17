"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesUncheckedCreateNestedManyWithoutMfa_factorsInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_challengesCreateWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesCreateWithoutMfa_factorsInput.schema");
const mfa_challengesUncheckedCreateWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesUncheckedCreateWithoutMfa_factorsInput.schema");
const mfa_challengesCreateOrConnectWithoutMfa_factorsInput_schema_1 = require("./mfa_challengesCreateOrConnectWithoutMfa_factorsInput.schema");
const mfa_challengesCreateManyMfa_factorsInputEnvelope_schema_1 = require("./mfa_challengesCreateManyMfa_factorsInputEnvelope.schema");
const mfa_challengesWhereUniqueInput_schema_1 = require("./mfa_challengesWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => mfa_challengesCreateManyMfa_factorsInputEnvelope_schema_1.mfa_challengesCreateManyMfa_factorsInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_challengesWhereUniqueInput_schema_1.mfa_challengesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.mfa_challengesUncheckedCreateNestedManyWithoutMfa_factorsInputObjectSchema = Schema;
