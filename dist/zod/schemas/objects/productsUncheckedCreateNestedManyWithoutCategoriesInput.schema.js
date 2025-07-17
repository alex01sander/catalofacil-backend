"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateWithoutCategoriesInput_schema_1 = require("./productsCreateWithoutCategoriesInput.schema");
const productsUncheckedCreateWithoutCategoriesInput_schema_1 = require("./productsUncheckedCreateWithoutCategoriesInput.schema");
const productsCreateOrConnectWithoutCategoriesInput_schema_1 = require("./productsCreateOrConnectWithoutCategoriesInput.schema");
const productsCreateManyCategoriesInputEnvelope_schema_1 = require("./productsCreateManyCategoriesInputEnvelope.schema");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => productsCreateManyCategoriesInputEnvelope_schema_1.productsCreateManyCategoriesInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.productsUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema = Schema;
