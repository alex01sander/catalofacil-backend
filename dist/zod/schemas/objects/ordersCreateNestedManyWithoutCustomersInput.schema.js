"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateNestedManyWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateWithoutCustomersInput_schema_1 = require("./ordersCreateWithoutCustomersInput.schema");
const ordersUncheckedCreateWithoutCustomersInput_schema_1 = require("./ordersUncheckedCreateWithoutCustomersInput.schema");
const ordersCreateOrConnectWithoutCustomersInput_schema_1 = require("./ordersCreateOrConnectWithoutCustomersInput.schema");
const ordersCreateManyCustomersInputEnvelope_schema_1 = require("./ordersCreateManyCustomersInputEnvelope.schema");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateWithoutCustomersInput_schema_1.ordersCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => ordersCreateWithoutCustomersInput_schema_1.ordersCreateWithoutCustomersInputObjectSchema).array(),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutCustomersInput_schema_1.ordersUncheckedCreateWithoutCustomersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUncheckedCreateWithoutCustomersInput_schema_1.ordersUncheckedCreateWithoutCustomersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateOrConnectWithoutCustomersInput_schema_1.ordersCreateOrConnectWithoutCustomersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersCreateOrConnectWithoutCustomersInput_schema_1.ordersCreateOrConnectWithoutCustomersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => ordersCreateManyCustomersInputEnvelope_schema_1.ordersCreateManyCustomersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.ordersCreateNestedManyWithoutCustomersInputObjectSchema = Schema;
