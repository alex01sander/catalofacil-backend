"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesUpdateManyWithoutStoresNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesCreateWithoutStoresInput_schema_1 = require("./categoriesCreateWithoutStoresInput.schema");
const categoriesUncheckedCreateWithoutStoresInput_schema_1 = require("./categoriesUncheckedCreateWithoutStoresInput.schema");
const categoriesCreateOrConnectWithoutStoresInput_schema_1 = require("./categoriesCreateOrConnectWithoutStoresInput.schema");
const categoriesUpsertWithWhereUniqueWithoutStoresInput_schema_1 = require("./categoriesUpsertWithWhereUniqueWithoutStoresInput.schema");
const categoriesCreateManyStoresInputEnvelope_schema_1 = require("./categoriesCreateManyStoresInputEnvelope.schema");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const categoriesUpdateWithWhereUniqueWithoutStoresInput_schema_1 = require("./categoriesUpdateWithWhereUniqueWithoutStoresInput.schema");
const categoriesUpdateManyWithWhereWithoutStoresInput_schema_1 = require("./categoriesUpdateManyWithWhereWithoutStoresInput.schema");
const categoriesScalarWhereInput_schema_1 = require("./categoriesScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesUpsertWithWhereUniqueWithoutStoresInput_schema_1.categoriesUpsertWithWhereUniqueWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => categoriesUpsertWithWhereUniqueWithoutStoresInput_schema_1.categoriesUpsertWithWhereUniqueWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => categoriesCreateManyStoresInputEnvelope_schema_1.categoriesCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesUpdateWithWhereUniqueWithoutStoresInput_schema_1.categoriesUpdateWithWhereUniqueWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => categoriesUpdateWithWhereUniqueWithoutStoresInput_schema_1.categoriesUpdateWithWhereUniqueWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesUpdateManyWithWhereWithoutStoresInput_schema_1.categoriesUpdateManyWithWhereWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => categoriesUpdateManyWithWhereWithoutStoresInput_schema_1.categoriesUpdateManyWithWhereWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesScalarWhereInput_schema_1.categoriesScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => categoriesScalarWhereInput_schema_1.categoriesScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.categoriesUpdateManyWithoutStoresNestedInputObjectSchema = Schema;
