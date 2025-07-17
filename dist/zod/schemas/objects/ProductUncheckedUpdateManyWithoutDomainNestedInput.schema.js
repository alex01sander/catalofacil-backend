"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUncheckedUpdateManyWithoutDomainNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const ProductCreateWithoutDomainInput_schema_1 = require("./ProductCreateWithoutDomainInput.schema");
const ProductUncheckedCreateWithoutDomainInput_schema_1 = require("./ProductUncheckedCreateWithoutDomainInput.schema");
const ProductCreateOrConnectWithoutDomainInput_schema_1 = require("./ProductCreateOrConnectWithoutDomainInput.schema");
const ProductUpsertWithWhereUniqueWithoutDomainInput_schema_1 = require("./ProductUpsertWithWhereUniqueWithoutDomainInput.schema");
const ProductCreateManyDomainInputEnvelope_schema_1 = require("./ProductCreateManyDomainInputEnvelope.schema");
const ProductWhereUniqueInput_schema_1 = require("./ProductWhereUniqueInput.schema");
const ProductUpdateWithWhereUniqueWithoutDomainInput_schema_1 = require("./ProductUpdateWithWhereUniqueWithoutDomainInput.schema");
const ProductUpdateManyWithWhereWithoutDomainInput_schema_1 = require("./ProductUpdateManyWithWhereWithoutDomainInput.schema");
const ProductScalarWhereInput_schema_1 = require("./ProductScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductCreateWithoutDomainInput_schema_1.ProductCreateWithoutDomainInputObjectSchema),
        zod_1.z.lazy(() => ProductCreateWithoutDomainInput_schema_1.ProductCreateWithoutDomainInputObjectSchema).array(),
        zod_1.z.lazy(() => ProductUncheckedCreateWithoutDomainInput_schema_1.ProductUncheckedCreateWithoutDomainInputObjectSchema),
        zod_1.z
            .lazy(() => ProductUncheckedCreateWithoutDomainInput_schema_1.ProductUncheckedCreateWithoutDomainInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductCreateOrConnectWithoutDomainInput_schema_1.ProductCreateOrConnectWithoutDomainInputObjectSchema),
        zod_1.z
            .lazy(() => ProductCreateOrConnectWithoutDomainInput_schema_1.ProductCreateOrConnectWithoutDomainInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductUpsertWithWhereUniqueWithoutDomainInput_schema_1.ProductUpsertWithWhereUniqueWithoutDomainInputObjectSchema),
        zod_1.z
            .lazy(() => ProductUpsertWithWhereUniqueWithoutDomainInput_schema_1.ProductUpsertWithWhereUniqueWithoutDomainInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => ProductCreateManyDomainInputEnvelope_schema_1.ProductCreateManyDomainInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductUpdateWithWhereUniqueWithoutDomainInput_schema_1.ProductUpdateWithWhereUniqueWithoutDomainInputObjectSchema),
        zod_1.z
            .lazy(() => ProductUpdateWithWhereUniqueWithoutDomainInput_schema_1.ProductUpdateWithWhereUniqueWithoutDomainInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductUpdateManyWithWhereWithoutDomainInput_schema_1.ProductUpdateManyWithWhereWithoutDomainInputObjectSchema),
        zod_1.z
            .lazy(() => ProductUpdateManyWithWhereWithoutDomainInput_schema_1.ProductUpdateManyWithWhereWithoutDomainInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductScalarWhereInput_schema_1.ProductScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => ProductScalarWhereInput_schema_1.ProductScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.ProductUncheckedUpdateManyWithoutDomainNestedInputObjectSchema = Schema;
