"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_tokensCreateWithoutUsersInput_schema_1 = require("./one_time_tokensCreateWithoutUsersInput.schema");
const one_time_tokensUncheckedCreateWithoutUsersInput_schema_1 = require("./one_time_tokensUncheckedCreateWithoutUsersInput.schema");
const one_time_tokensCreateOrConnectWithoutUsersInput_schema_1 = require("./one_time_tokensCreateOrConnectWithoutUsersInput.schema");
const one_time_tokensUpsertWithWhereUniqueWithoutUsersInput_schema_1 = require("./one_time_tokensUpsertWithWhereUniqueWithoutUsersInput.schema");
const one_time_tokensCreateManyUsersInputEnvelope_schema_1 = require("./one_time_tokensCreateManyUsersInputEnvelope.schema");
const one_time_tokensWhereUniqueInput_schema_1 = require("./one_time_tokensWhereUniqueInput.schema");
const one_time_tokensUpdateWithWhereUniqueWithoutUsersInput_schema_1 = require("./one_time_tokensUpdateWithWhereUniqueWithoutUsersInput.schema");
const one_time_tokensUpdateManyWithWhereWithoutUsersInput_schema_1 = require("./one_time_tokensUpdateManyWithWhereWithoutUsersInput.schema");
const one_time_tokensScalarWhereInput_schema_1 = require("./one_time_tokensScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensCreateWithoutUsersInput_schema_1.one_time_tokensCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => one_time_tokensCreateWithoutUsersInput_schema_1.one_time_tokensCreateWithoutUsersInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => one_time_tokensUncheckedCreateWithoutUsersInput_schema_1.one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => one_time_tokensUncheckedCreateWithoutUsersInput_schema_1.one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensCreateOrConnectWithoutUsersInput_schema_1.one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => one_time_tokensCreateOrConnectWithoutUsersInput_schema_1.one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensUpsertWithWhereUniqueWithoutUsersInput_schema_1.one_time_tokensUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => one_time_tokensUpsertWithWhereUniqueWithoutUsersInput_schema_1.one_time_tokensUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => one_time_tokensCreateManyUsersInputEnvelope_schema_1.one_time_tokensCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensUpdateWithWhereUniqueWithoutUsersInput_schema_1.one_time_tokensUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => one_time_tokensUpdateWithWhereUniqueWithoutUsersInput_schema_1.one_time_tokensUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensUpdateManyWithWhereWithoutUsersInput_schema_1.one_time_tokensUpdateManyWithWhereWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => one_time_tokensUpdateManyWithWhereWithoutUsersInput_schema_1.one_time_tokensUpdateManyWithWhereWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensScalarWhereInput_schema_1.one_time_tokensScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensScalarWhereInput_schema_1.one_time_tokensScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.one_time_tokensUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
