"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdateManyWithoutCategoriesNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateWithoutCategoriesInput_schema_1 = require("./productsCreateWithoutCategoriesInput.schema");
const productsUncheckedCreateWithoutCategoriesInput_schema_1 = require("./productsUncheckedCreateWithoutCategoriesInput.schema");
const productsCreateOrConnectWithoutCategoriesInput_schema_1 = require("./productsCreateOrConnectWithoutCategoriesInput.schema");
const productsUpsertWithWhereUniqueWithoutCategoriesInput_schema_1 = require("./productsUpsertWithWhereUniqueWithoutCategoriesInput.schema");
const productsCreateManyCategoriesInputEnvelope_schema_1 = require("./productsCreateManyCategoriesInputEnvelope.schema");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsUpdateWithWhereUniqueWithoutCategoriesInput_schema_1 = require("./productsUpdateWithWhereUniqueWithoutCategoriesInput.schema");
const productsUpdateManyWithWhereWithoutCategoriesInput_schema_1 = require("./productsUpdateManyWithWhereWithoutCategoriesInput.schema");
const productsScalarWhereInput_schema_1 = require("./productsScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => productsCreateWithoutCategoriesInput_schema_1.productsCreateWithoutCategoriesInputObjectSchema),
        zod_1.z
            .lazy(() => productsCreateWithoutCategoriesInput_schema_1.productsCreateWithoutCategoriesInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => productsUncheckedCreateWithoutCategoriesInput_schema_1.productsUncheckedCreateWithoutCategoriesInputObjectSchema),
        zod_1.z
            .lazy(() => productsUncheckedCreateWithoutCategoriesInput_schema_1.productsUncheckedCreateWithoutCategoriesInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => productsCreateOrConnectWithoutCategoriesInput_schema_1.productsCreateOrConnectWithoutCategoriesInputObjectSchema),
        zod_1.z
            .lazy(() => productsCreateOrConnectWithoutCategoriesInput_schema_1.productsCreateOrConnectWithoutCategoriesInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => productsUpsertWithWhereUniqueWithoutCategoriesInput_schema_1.productsUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema),
        zod_1.z
            .lazy(() => productsUpsertWithWhereUniqueWithoutCategoriesInput_schema_1.productsUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => productsCreateManyCategoriesInputEnvelope_schema_1.productsCreateManyCategoriesInputEnvelopeObjectSchema)
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
        zod_1.z.lazy(() => productsUpdateWithWhereUniqueWithoutCategoriesInput_schema_1.productsUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema),
        zod_1.z
            .lazy(() => productsUpdateWithWhereUniqueWithoutCategoriesInput_schema_1.productsUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => productsUpdateManyWithWhereWithoutCategoriesInput_schema_1.productsUpdateManyWithWhereWithoutCategoriesInputObjectSchema),
        zod_1.z
            .lazy(() => productsUpdateManyWithWhereWithoutCategoriesInput_schema_1.productsUpdateManyWithWhereWithoutCategoriesInputObjectSchema)
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
exports.productsUpdateManyWithoutCategoriesNestedInputObjectSchema = Schema;
