"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsCreateWithoutUsersInput_schema_1 = require("./sessionsCreateWithoutUsersInput.schema");
const sessionsUncheckedCreateWithoutUsersInput_schema_1 = require("./sessionsUncheckedCreateWithoutUsersInput.schema");
const sessionsCreateOrConnectWithoutUsersInput_schema_1 = require("./sessionsCreateOrConnectWithoutUsersInput.schema");
const sessionsUpsertWithWhereUniqueWithoutUsersInput_schema_1 = require("./sessionsUpsertWithWhereUniqueWithoutUsersInput.schema");
const sessionsCreateManyUsersInputEnvelope_schema_1 = require("./sessionsCreateManyUsersInputEnvelope.schema");
const sessionsWhereUniqueInput_schema_1 = require("./sessionsWhereUniqueInput.schema");
const sessionsUpdateWithWhereUniqueWithoutUsersInput_schema_1 = require("./sessionsUpdateWithWhereUniqueWithoutUsersInput.schema");
const sessionsUpdateManyWithWhereWithoutUsersInput_schema_1 = require("./sessionsUpdateManyWithWhereWithoutUsersInput.schema");
const sessionsScalarWhereInput_schema_1 = require("./sessionsScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsCreateWithoutUsersInput_schema_1.sessionsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => sessionsCreateWithoutUsersInput_schema_1.sessionsCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => sessionsUncheckedCreateWithoutUsersInput_schema_1.sessionsUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => sessionsUncheckedCreateWithoutUsersInput_schema_1.sessionsUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsCreateOrConnectWithoutUsersInput_schema_1.sessionsCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => sessionsCreateOrConnectWithoutUsersInput_schema_1.sessionsCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsUpsertWithWhereUniqueWithoutUsersInput_schema_1.sessionsUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => sessionsUpsertWithWhereUniqueWithoutUsersInput_schema_1.sessionsUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => sessionsCreateManyUsersInputEnvelope_schema_1.sessionsCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsUpdateWithWhereUniqueWithoutUsersInput_schema_1.sessionsUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => sessionsUpdateWithWhereUniqueWithoutUsersInput_schema_1.sessionsUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsUpdateManyWithWhereWithoutUsersInput_schema_1.sessionsUpdateManyWithWhereWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => sessionsUpdateManyWithWhereWithoutUsersInput_schema_1.sessionsUpdateManyWithWhereWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsScalarWhereInput_schema_1.sessionsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => sessionsScalarWhereInput_schema_1.sessionsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.sessionsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
