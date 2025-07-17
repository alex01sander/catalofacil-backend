"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUncheckedCreateNestedManyWithoutDomainInputObjectSchema = void 0;
const zod_1 = require("zod");
const ProductCreateWithoutDomainInput_schema_1 = require("./ProductCreateWithoutDomainInput.schema");
const ProductUncheckedCreateWithoutDomainInput_schema_1 = require("./ProductUncheckedCreateWithoutDomainInput.schema");
const ProductCreateOrConnectWithoutDomainInput_schema_1 = require("./ProductCreateOrConnectWithoutDomainInput.schema");
const ProductCreateManyDomainInputEnvelope_schema_1 = require("./ProductCreateManyDomainInputEnvelope.schema");
const ProductWhereUniqueInput_schema_1 = require("./ProductWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => ProductCreateManyDomainInputEnvelope_schema_1.ProductCreateManyDomainInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.ProductUncheckedCreateNestedManyWithoutDomainInputObjectSchema = Schema;
