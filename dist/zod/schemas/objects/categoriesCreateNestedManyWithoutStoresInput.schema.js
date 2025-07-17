"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesCreateNestedManyWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesCreateWithoutStoresInput_schema_1 = require("./categoriesCreateWithoutStoresInput.schema");
const categoriesUncheckedCreateWithoutStoresInput_schema_1 = require("./categoriesUncheckedCreateWithoutStoresInput.schema");
const categoriesCreateOrConnectWithoutStoresInput_schema_1 = require("./categoriesCreateOrConnectWithoutStoresInput.schema");
const categoriesCreateManyStoresInputEnvelope_schema_1 = require("./categoriesCreateManyStoresInputEnvelope.schema");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesCreateWithoutStoresInput_schema_1.categoriesCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => categoriesCreateWithoutStoresInput_schema_1.categoriesCreateWithoutStoresInputObjectSchema).array(),
        zod_1.z.lazy(() => categoriesUncheckedCreateWithoutStoresInput_schema_1.categoriesUncheckedCreateWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => categoriesUncheckedCreateWithoutStoresInput_schema_1.categoriesUncheckedCreateWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesCreateOrConnectWithoutStoresInput_schema_1.categoriesCreateOrConnectWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => categoriesCreateOrConnectWithoutStoresInput_schema_1.categoriesCreateOrConnectWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => categoriesCreateManyStoresInputEnvelope_schema_1.categoriesCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.categoriesCreateNestedManyWithoutStoresInputObjectSchema = Schema;
