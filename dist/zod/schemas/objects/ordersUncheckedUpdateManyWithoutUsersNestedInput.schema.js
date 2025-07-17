"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateWithoutUsersInput_schema_1 = require("./ordersCreateWithoutUsersInput.schema");
const ordersUncheckedCreateWithoutUsersInput_schema_1 = require("./ordersUncheckedCreateWithoutUsersInput.schema");
const ordersCreateOrConnectWithoutUsersInput_schema_1 = require("./ordersCreateOrConnectWithoutUsersInput.schema");
const ordersUpsertWithWhereUniqueWithoutUsersInput_schema_1 = require("./ordersUpsertWithWhereUniqueWithoutUsersInput.schema");
const ordersCreateManyUsersInputEnvelope_schema_1 = require("./ordersCreateManyUsersInputEnvelope.schema");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersUpdateWithWhereUniqueWithoutUsersInput_schema_1 = require("./ordersUpdateWithWhereUniqueWithoutUsersInput.schema");
const ordersUpdateManyWithWhereWithoutUsersInput_schema_1 = require("./ordersUpdateManyWithWhereWithoutUsersInput.schema");
const ordersScalarWhereInput_schema_1 = require("./ordersScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateWithoutUsersInput_schema_1.ordersCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => ordersCreateWithoutUsersInput_schema_1.ordersCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutUsersInput_schema_1.ordersUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUncheckedCreateWithoutUsersInput_schema_1.ordersUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateOrConnectWithoutUsersInput_schema_1.ordersCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersCreateOrConnectWithoutUsersInput_schema_1.ordersCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersUpsertWithWhereUniqueWithoutUsersInput_schema_1.ordersUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUpsertWithWhereUniqueWithoutUsersInput_schema_1.ordersUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => ordersCreateManyUsersInputEnvelope_schema_1.ordersCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersUpdateWithWhereUniqueWithoutUsersInput_schema_1.ordersUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUpdateWithWhereUniqueWithoutUsersInput_schema_1.ordersUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersUpdateManyWithWhereWithoutUsersInput_schema_1.ordersUpdateManyWithWhereWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUpdateManyWithWhereWithoutUsersInput_schema_1.ordersUpdateManyWithWhereWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersScalarWhereInput_schema_1.ordersScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ordersScalarWhereInput_schema_1.ordersScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.ordersUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
