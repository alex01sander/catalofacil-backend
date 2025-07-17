"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdateManyWithoutStoresNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateWithoutStoresInput_schema_1 = require("./productsCreateWithoutStoresInput.schema");
const productsUncheckedCreateWithoutStoresInput_schema_1 = require("./productsUncheckedCreateWithoutStoresInput.schema");
const productsCreateOrConnectWithoutStoresInput_schema_1 = require("./productsCreateOrConnectWithoutStoresInput.schema");
const productsUpsertWithWhereUniqueWithoutStoresInput_schema_1 = require("./productsUpsertWithWhereUniqueWithoutStoresInput.schema");
const productsCreateManyStoresInputEnvelope_schema_1 = require("./productsCreateManyStoresInputEnvelope.schema");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsUpdateWithWhereUniqueWithoutStoresInput_schema_1 = require("./productsUpdateWithWhereUniqueWithoutStoresInput.schema");
const productsUpdateManyWithWhereWithoutStoresInput_schema_1 = require("./productsUpdateManyWithWhereWithoutStoresInput.schema");
const productsScalarWhereInput_schema_1 = require("./productsScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => productsCreateWithoutStoresInput_schema_1.productsCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => productsCreateWithoutStoresInput_schema_1.productsCreateWithoutStoresInputObjectSchema).array(),
        zod_1.z.lazy(() => productsUncheckedCreateWithoutStoresInput_schema_1.productsUncheckedCreateWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => productsUncheckedCreateWithoutStoresInput_schema_1.productsUncheckedCreateWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => productsCreateOrConnectWithoutStoresInput_schema_1.productsCreateOrConnectWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => productsCreateOrConnectWithoutStoresInput_schema_1.productsCreateOrConnectWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => productsUpsertWithWhereUniqueWithoutStoresInput_schema_1.productsUpsertWithWhereUniqueWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => productsUpsertWithWhereUniqueWithoutStoresInput_schema_1.productsUpsertWithWhereUniqueWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => productsCreateManyStoresInputEnvelope_schema_1.productsCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => productsUpdateWithWhereUniqueWithoutStoresInput_schema_1.productsUpdateWithWhereUniqueWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => productsUpdateWithWhereUniqueWithoutStoresInput_schema_1.productsUpdateWithWhereUniqueWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => productsUpdateManyWithWhereWithoutStoresInput_schema_1.productsUpdateManyWithWhereWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => productsUpdateManyWithWhereWithoutStoresInput_schema_1.productsUpdateManyWithWhereWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => productsScalarWhereInput_schema_1.productsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => productsScalarWhereInput_schema_1.productsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.productsUpdateManyWithoutStoresNestedInputObjectSchema = Schema;
