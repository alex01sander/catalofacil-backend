"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const identitiesCreateWithoutUsersInput_schema_1 = require("./identitiesCreateWithoutUsersInput.schema");
const identitiesUncheckedCreateWithoutUsersInput_schema_1 = require("./identitiesUncheckedCreateWithoutUsersInput.schema");
const identitiesCreateOrConnectWithoutUsersInput_schema_1 = require("./identitiesCreateOrConnectWithoutUsersInput.schema");
const identitiesUpsertWithWhereUniqueWithoutUsersInput_schema_1 = require("./identitiesUpsertWithWhereUniqueWithoutUsersInput.schema");
const identitiesCreateManyUsersInputEnvelope_schema_1 = require("./identitiesCreateManyUsersInputEnvelope.schema");
const identitiesWhereUniqueInput_schema_1 = require("./identitiesWhereUniqueInput.schema");
const identitiesUpdateWithWhereUniqueWithoutUsersInput_schema_1 = require("./identitiesUpdateWithWhereUniqueWithoutUsersInput.schema");
const identitiesUpdateManyWithWhereWithoutUsersInput_schema_1 = require("./identitiesUpdateManyWithWhereWithoutUsersInput.schema");
const identitiesScalarWhereInput_schema_1 = require("./identitiesScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesCreateWithoutUsersInput_schema_1.identitiesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => identitiesCreateWithoutUsersInput_schema_1.identitiesCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => identitiesUncheckedCreateWithoutUsersInput_schema_1.identitiesUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => identitiesUncheckedCreateWithoutUsersInput_schema_1.identitiesUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesCreateOrConnectWithoutUsersInput_schema_1.identitiesCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => identitiesCreateOrConnectWithoutUsersInput_schema_1.identitiesCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesUpsertWithWhereUniqueWithoutUsersInput_schema_1.identitiesUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => identitiesUpsertWithWhereUniqueWithoutUsersInput_schema_1.identitiesUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => identitiesCreateManyUsersInputEnvelope_schema_1.identitiesCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesUpdateWithWhereUniqueWithoutUsersInput_schema_1.identitiesUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => identitiesUpdateWithWhereUniqueWithoutUsersInput_schema_1.identitiesUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesUpdateManyWithWhereWithoutUsersInput_schema_1.identitiesUpdateManyWithWhereWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => identitiesUpdateManyWithWhereWithoutUsersInput_schema_1.identitiesUpdateManyWithWhereWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesScalarWhereInput_schema_1.identitiesScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => identitiesScalarWhereInput_schema_1.identitiesScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.identitiesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
