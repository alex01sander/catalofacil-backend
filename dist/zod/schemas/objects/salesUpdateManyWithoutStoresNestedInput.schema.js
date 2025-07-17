"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesUpdateManyWithoutStoresNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const salesCreateWithoutStoresInput_schema_1 = require("./salesCreateWithoutStoresInput.schema");
const salesUncheckedCreateWithoutStoresInput_schema_1 = require("./salesUncheckedCreateWithoutStoresInput.schema");
const salesCreateOrConnectWithoutStoresInput_schema_1 = require("./salesCreateOrConnectWithoutStoresInput.schema");
const salesUpsertWithWhereUniqueWithoutStoresInput_schema_1 = require("./salesUpsertWithWhereUniqueWithoutStoresInput.schema");
const salesCreateManyStoresInputEnvelope_schema_1 = require("./salesCreateManyStoresInputEnvelope.schema");
const salesWhereUniqueInput_schema_1 = require("./salesWhereUniqueInput.schema");
const salesUpdateWithWhereUniqueWithoutStoresInput_schema_1 = require("./salesUpdateWithWhereUniqueWithoutStoresInput.schema");
const salesUpdateManyWithWhereWithoutStoresInput_schema_1 = require("./salesUpdateManyWithWhereWithoutStoresInput.schema");
const salesScalarWhereInput_schema_1 = require("./salesScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => salesCreateWithoutStoresInput_schema_1.salesCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => salesCreateWithoutStoresInput_schema_1.salesCreateWithoutStoresInputObjectSchema).array(),
        zod_1.z.lazy(() => salesUncheckedCreateWithoutStoresInput_schema_1.salesUncheckedCreateWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => salesUncheckedCreateWithoutStoresInput_schema_1.salesUncheckedCreateWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => salesCreateOrConnectWithoutStoresInput_schema_1.salesCreateOrConnectWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => salesCreateOrConnectWithoutStoresInput_schema_1.salesCreateOrConnectWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => salesUpsertWithWhereUniqueWithoutStoresInput_schema_1.salesUpsertWithWhereUniqueWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => salesUpsertWithWhereUniqueWithoutStoresInput_schema_1.salesUpsertWithWhereUniqueWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => salesCreateManyStoresInputEnvelope_schema_1.salesCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => salesUpdateWithWhereUniqueWithoutStoresInput_schema_1.salesUpdateWithWhereUniqueWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => salesUpdateWithWhereUniqueWithoutStoresInput_schema_1.salesUpdateWithWhereUniqueWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => salesUpdateManyWithWhereWithoutStoresInput_schema_1.salesUpdateManyWithWhereWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => salesUpdateManyWithWhereWithoutStoresInput_schema_1.salesUpdateManyWithWhereWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => salesScalarWhereInput_schema_1.salesScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => salesScalarWhereInput_schema_1.salesScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.salesUpdateManyWithoutStoresNestedInputObjectSchema = Schema;
