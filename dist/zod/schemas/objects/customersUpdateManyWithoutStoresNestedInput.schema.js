"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUpdateManyWithoutStoresNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersCreateWithoutStoresInput_schema_1 = require("./customersCreateWithoutStoresInput.schema");
const customersUncheckedCreateWithoutStoresInput_schema_1 = require("./customersUncheckedCreateWithoutStoresInput.schema");
const customersCreateOrConnectWithoutStoresInput_schema_1 = require("./customersCreateOrConnectWithoutStoresInput.schema");
const customersUpsertWithWhereUniqueWithoutStoresInput_schema_1 = require("./customersUpsertWithWhereUniqueWithoutStoresInput.schema");
const customersCreateManyStoresInputEnvelope_schema_1 = require("./customersCreateManyStoresInputEnvelope.schema");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const customersUpdateWithWhereUniqueWithoutStoresInput_schema_1 = require("./customersUpdateWithWhereUniqueWithoutStoresInput.schema");
const customersUpdateManyWithWhereWithoutStoresInput_schema_1 = require("./customersUpdateManyWithWhereWithoutStoresInput.schema");
const customersScalarWhereInput_schema_1 = require("./customersScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => customersCreateWithoutStoresInput_schema_1.customersCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => customersCreateWithoutStoresInput_schema_1.customersCreateWithoutStoresInputObjectSchema).array(),
        zod_1.z.lazy(() => customersUncheckedCreateWithoutStoresInput_schema_1.customersUncheckedCreateWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => customersUncheckedCreateWithoutStoresInput_schema_1.customersUncheckedCreateWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => customersCreateOrConnectWithoutStoresInput_schema_1.customersCreateOrConnectWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => customersCreateOrConnectWithoutStoresInput_schema_1.customersCreateOrConnectWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => customersUpsertWithWhereUniqueWithoutStoresInput_schema_1.customersUpsertWithWhereUniqueWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => customersUpsertWithWhereUniqueWithoutStoresInput_schema_1.customersUpsertWithWhereUniqueWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => customersCreateManyStoresInputEnvelope_schema_1.customersCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => customersUpdateWithWhereUniqueWithoutStoresInput_schema_1.customersUpdateWithWhereUniqueWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => customersUpdateWithWhereUniqueWithoutStoresInput_schema_1.customersUpdateWithWhereUniqueWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => customersUpdateManyWithWhereWithoutStoresInput_schema_1.customersUpdateManyWithWhereWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => customersUpdateManyWithWhereWithoutStoresInput_schema_1.customersUpdateManyWithWhereWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => customersScalarWhereInput_schema_1.customersScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => customersScalarWhereInput_schema_1.customersScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.customersUpdateManyWithoutStoresNestedInputObjectSchema = Schema;
