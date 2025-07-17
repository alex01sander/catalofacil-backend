"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateNestedManyWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateWithoutStoresInput_schema_1 = require("./ordersCreateWithoutStoresInput.schema");
const ordersUncheckedCreateWithoutStoresInput_schema_1 = require("./ordersUncheckedCreateWithoutStoresInput.schema");
const ordersCreateOrConnectWithoutStoresInput_schema_1 = require("./ordersCreateOrConnectWithoutStoresInput.schema");
const ordersCreateManyStoresInputEnvelope_schema_1 = require("./ordersCreateManyStoresInputEnvelope.schema");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateWithoutStoresInput_schema_1.ordersCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => ordersCreateWithoutStoresInput_schema_1.ordersCreateWithoutStoresInputObjectSchema).array(),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutStoresInput_schema_1.ordersUncheckedCreateWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUncheckedCreateWithoutStoresInput_schema_1.ordersUncheckedCreateWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateOrConnectWithoutStoresInput_schema_1.ordersCreateOrConnectWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => ordersCreateOrConnectWithoutStoresInput_schema_1.ordersCreateOrConnectWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => ordersCreateManyStoresInputEnvelope_schema_1.ordersCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.ordersCreateNestedManyWithoutStoresInputObjectSchema = Schema;
