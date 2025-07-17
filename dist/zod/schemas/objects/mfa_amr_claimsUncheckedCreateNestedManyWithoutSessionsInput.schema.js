"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsUncheckedCreateNestedManyWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_amr_claimsCreateWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsCreateWithoutSessionsInput.schema");
const mfa_amr_claimsUncheckedCreateWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsUncheckedCreateWithoutSessionsInput.schema");
const mfa_amr_claimsCreateOrConnectWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsCreateOrConnectWithoutSessionsInput.schema");
const mfa_amr_claimsCreateManySessionsInputEnvelope_schema_1 = require("./mfa_amr_claimsCreateManySessionsInputEnvelope.schema");
const mfa_amr_claimsWhereUniqueInput_schema_1 = require("./mfa_amr_claimsWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_amr_claimsCreateWithoutSessionsInput_schema_1.mfa_amr_claimsCreateWithoutSessionsInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_amr_claimsCreateWithoutSessionsInput_schema_1.mfa_amr_claimsCreateWithoutSessionsInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => mfa_amr_claimsUncheckedCreateWithoutSessionsInput_schema_1.mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_amr_claimsUncheckedCreateWithoutSessionsInput_schema_1.mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_amr_claimsCreateOrConnectWithoutSessionsInput_schema_1.mfa_amr_claimsCreateOrConnectWithoutSessionsInputObjectSchema),
        zod_1.z
            .lazy(() => mfa_amr_claimsCreateOrConnectWithoutSessionsInput_schema_1.mfa_amr_claimsCreateOrConnectWithoutSessionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => mfa_amr_claimsCreateManySessionsInputEnvelope_schema_1.mfa_amr_claimsCreateManySessionsInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => mfa_amr_claimsWhereUniqueInput_schema_1.mfa_amr_claimsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => mfa_amr_claimsWhereUniqueInput_schema_1.mfa_amr_claimsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.mfa_amr_claimsUncheckedCreateNestedManyWithoutSessionsInputObjectSchema = Schema;
