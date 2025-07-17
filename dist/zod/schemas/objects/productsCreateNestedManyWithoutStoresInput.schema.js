"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsCreateNestedManyWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateWithoutStoresInput_schema_1 = require("./productsCreateWithoutStoresInput.schema");
const productsUncheckedCreateWithoutStoresInput_schema_1 = require("./productsUncheckedCreateWithoutStoresInput.schema");
const productsCreateOrConnectWithoutStoresInput_schema_1 = require("./productsCreateOrConnectWithoutStoresInput.schema");
const productsCreateManyStoresInputEnvelope_schema_1 = require("./productsCreateManyStoresInputEnvelope.schema");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => productsCreateManyStoresInputEnvelope_schema_1.productsCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.productsCreateNestedManyWithoutStoresInputObjectSchema = Schema;
