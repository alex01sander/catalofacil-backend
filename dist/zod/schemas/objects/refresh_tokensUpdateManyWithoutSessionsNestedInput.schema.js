"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensUpdateManyWithoutSessionsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const refresh_tokensCreateWithoutSessionsInput_schema_1 = require("./refresh_tokensCreateWithoutSessionsInput.schema");
const refresh_tokensUncheckedCreateWithoutSessionsInput_schema_1 = require("./refresh_tokensUncheckedCreateWithoutSessionsInput.schema");
const refresh_tokensCreateOrConnectWithoutSessionsInput_schema_1 = require("./refresh_tokensCreateOrConnectWithoutSessionsInput.schema");
const refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput_schema_1 = require("./refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput.schema");
const refresh_tokensCreateManySessionsInputEnvelope_schema_1 = require("./refresh_tokensCreateManySessionsInputEnvelope.schema");
const refresh_tokensWhereUniqueInput_schema_1 = require("./refresh_tokensWhereUniqueInput.schema");
const refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput_schema_1 = require("./refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput.schema");
const refresh_tokensUpdateManyWithWhereWithoutSessionsInput_schema_1 = require("./refresh_tokensUpdateManyWithWhereWithoutSessionsInput.schema");
const refresh_tokensScalarWhereInput_schema_1 = require("./refresh_tokensScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput_schema_1.refresh_tokensUpsertWithWhereUniqueWithoutSessionsInputObjectSchema),
        zod_1.z
            .lazy(() => refresh_tokensUpsertWithWhereUniqueWithoutSessionsInput_schema_1.refresh_tokensUpsertWithWhereUniqueWithoutSessionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => refresh_tokensCreateManySessionsInputEnvelope_schema_1.refresh_tokensCreateManySessionsInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => refresh_tokensWhereUniqueInput_schema_1.refresh_tokensWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput_schema_1.refresh_tokensUpdateWithWhereUniqueWithoutSessionsInputObjectSchema),
        zod_1.z
            .lazy(() => refresh_tokensUpdateWithWhereUniqueWithoutSessionsInput_schema_1.refresh_tokensUpdateWithWhereUniqueWithoutSessionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensUpdateManyWithWhereWithoutSessionsInput_schema_1.refresh_tokensUpdateManyWithWhereWithoutSessionsInputObjectSchema),
        zod_1.z
            .lazy(() => refresh_tokensUpdateManyWithWhereWithoutSessionsInput_schema_1.refresh_tokensUpdateManyWithWhereWithoutSessionsInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => refresh_tokensScalarWhereInput_schema_1.refresh_tokensScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => refresh_tokensScalarWhereInput_schema_1.refresh_tokensScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.refresh_tokensUpdateManyWithoutSessionsNestedInputObjectSchema = Schema;
