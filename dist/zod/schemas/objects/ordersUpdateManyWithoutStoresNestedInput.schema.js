"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpdateManyWithoutStoresNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateWithoutStoresInput_schema_1 = require("./ordersCreateWithoutStoresInput.schema");
const ordersUncheckedCreateWithoutStoresInput_schema_1 = require("./ordersUncheckedCreateWithoutStoresInput.schema");
const ordersCreateOrConnectWithoutStoresInput_schema_1 = require("./ordersCreateOrConnectWithoutStoresInput.schema");
const ordersUpsertWithWhereUniqueWithoutStoresInput_schema_1 = require("./ordersUpsertWithWhereUniqueWithoutStoresInput.schema");
const ordersCreateManyStoresInputEnvelope_schema_1 = require("./ordersCreateManyStoresInputEnvelope.schema");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersUpdateWithWhereUniqueWithoutStoresInput_schema_1 = require("./ordersUpdateWithWhereUniqueWithoutStoresInput.schema");
const ordersUpdateManyWithWhereWithoutStoresInput_schema_1 = require("./ordersUpdateManyWithWhereWithoutStoresInput.schema");
const ordersScalarWhereInput_schema_1 = require("./ordersScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateWithoutStoresInput_schema_1.ordersCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => ordersCreateWithoutStoresInput_schema_1.ordersCreateWithoutStoresInputObjectSchema).array(),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutStoresInput_schema_1.ordersUncheckedCreateWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUncheckedCreateWithoutStoresInput_schema_1.ordersUncheckedCreateWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateOrConnectWithoutStoresInput_schema_1.ordersCreateOrConnectWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => ordersCreateOrConnectWithoutStoresInput_schema_1.ordersCreateOrConnectWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersUpsertWithWhereUniqueWithoutStoresInput_schema_1.ordersUpsertWithWhereUniqueWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUpsertWithWhereUniqueWithoutStoresInput_schema_1.ordersUpsertWithWhereUniqueWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => ordersCreateManyStoresInputEnvelope_schema_1.ordersCreateManyStoresInputEnvelopeObjectSchema)
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
        zod_1.z.lazy(() => ordersUpdateWithWhereUniqueWithoutStoresInput_schema_1.ordersUpdateWithWhereUniqueWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUpdateWithWhereUniqueWithoutStoresInput_schema_1.ordersUpdateWithWhereUniqueWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersUpdateManyWithWhereWithoutStoresInput_schema_1.ordersUpdateManyWithWhereWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUpdateManyWithWhereWithoutStoresInput_schema_1.ordersUpdateManyWithWhereWithoutStoresInputObjectSchema)
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
exports.ordersUpdateManyWithoutStoresNestedInputObjectSchema = Schema;
