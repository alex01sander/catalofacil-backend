"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensUncheckedCreateNestedManyWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const refresh_tokensCreateWithoutSessionsInput_schema_1 = require("./refresh_tokensCreateWithoutSessionsInput.schema");
const refresh_tokensUncheckedCreateWithoutSessionsInput_schema_1 = require("./refresh_tokensUncheckedCreateWithoutSessionsInput.schema");
const refresh_tokensCreateOrConnectWithoutSessionsInput_schema_1 = require("./refresh_tokensCreateOrConnectWithoutSessionsInput.schema");
const refresh_tokensCreateManySessionsInputEnvelope_schema_1 = require("./refresh_tokensCreateManySessionsInputEnvelope.schema");
const refresh_tokensWhereUniqueInput_schema_1 = require("./refresh_tokensWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensCreateWithoutSessionsInput_schema_1.refresh_tokensCreateWithoutSessionsInputObjectSchema),
        zod_1.z
            .lazy(() => refresh_tokensCreateWithoutSessionsInput_schema_1.refresh_tokensCreateWithoutSessionsInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => refresh_tokensUncheckedCreateWithoutSessionsInput_schema_1.refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema),
        zod_1.z
            .lazy(() => refresh_tokensUncheckedCreateWithoutSessionsInput_schema_1.refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensCreateOrConnectWithoutSessionsInput_schema_1.refresh_tokensCreateOrConnectWithoutSessionsInputObjectSchema),
        zod_1.z
            .lazy(() => refresh_tokensCreateOrConnectWithoutSessionsInput_schema_1.refresh_tokensCreateOrConnectWithoutSessionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => refresh_tokensCreateManySessionsInputEnvelope_schema_1.refresh_tokensCreateManySessionsInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.refresh_tokensUncheckedCreateNestedManyWithoutSessionsInputObjectSchema = Schema;
