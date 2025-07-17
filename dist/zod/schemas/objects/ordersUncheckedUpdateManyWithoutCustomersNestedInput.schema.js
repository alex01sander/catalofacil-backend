"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUncheckedUpdateManyWithoutCustomersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateWithoutCustomersInput_schema_1 = require("./ordersCreateWithoutCustomersInput.schema");
const ordersUncheckedCreateWithoutCustomersInput_schema_1 = require("./ordersUncheckedCreateWithoutCustomersInput.schema");
const ordersCreateOrConnectWithoutCustomersInput_schema_1 = require("./ordersCreateOrConnectWithoutCustomersInput.schema");
const ordersUpsertWithWhereUniqueWithoutCustomersInput_schema_1 = require("./ordersUpsertWithWhereUniqueWithoutCustomersInput.schema");
const ordersCreateManyCustomersInputEnvelope_schema_1 = require("./ordersCreateManyCustomersInputEnvelope.schema");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersUpdateWithWhereUniqueWithoutCustomersInput_schema_1 = require("./ordersUpdateWithWhereUniqueWithoutCustomersInput.schema");
const ordersUpdateManyWithWhereWithoutCustomersInput_schema_1 = require("./ordersUpdateManyWithWhereWithoutCustomersInput.schema");
const ordersScalarWhereInput_schema_1 = require("./ordersScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateWithoutCustomersInput_schema_1.ordersCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => ordersCreateWithoutCustomersInput_schema_1.ordersCreateWithoutCustomersInputObjectSchema).array(),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutCustomersInput_schema_1.ordersUncheckedCreateWithoutCustomersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUncheckedCreateWithoutCustomersInput_schema_1.ordersUncheckedCreateWithoutCustomersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateOrConnectWithoutCustomersInput_schema_1.ordersCreateOrConnectWithoutCustomersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersCreateOrConnectWithoutCustomersInput_schema_1.ordersCreateOrConnectWithoutCustomersInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersUpsertWithWhereUniqueWithoutCustomersInput_schema_1.ordersUpsertWithWhereUniqueWithoutCustomersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUpsertWithWhereUniqueWithoutCustomersInput_schema_1.ordersUpsertWithWhereUniqueWithoutCustomersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => ordersCreateManyCustomersInputEnvelope_schema_1.ordersCreateManyCustomersInputEnvelopeObjectSchema)
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
        zod_1.z.lazy(() => ordersUpdateWithWhereUniqueWithoutCustomersInput_schema_1.ordersUpdateWithWhereUniqueWithoutCustomersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUpdateWithWhereUniqueWithoutCustomersInput_schema_1.ordersUpdateWithWhereUniqueWithoutCustomersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersUpdateManyWithWhereWithoutCustomersInput_schema_1.ordersUpdateManyWithWhereWithoutCustomersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUpdateManyWithWhereWithoutCustomersInput_schema_1.ordersUpdateManyWithWhereWithoutCustomersInputObjectSchema)
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
exports.ordersUncheckedUpdateManyWithoutCustomersNestedInputObjectSchema = Schema;
