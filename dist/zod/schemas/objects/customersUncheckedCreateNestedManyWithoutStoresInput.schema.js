"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUncheckedCreateNestedManyWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersCreateWithoutStoresInput_schema_1 = require("./customersCreateWithoutStoresInput.schema");
const customersUncheckedCreateWithoutStoresInput_schema_1 = require("./customersUncheckedCreateWithoutStoresInput.schema");
const customersCreateOrConnectWithoutStoresInput_schema_1 = require("./customersCreateOrConnectWithoutStoresInput.schema");
const customersCreateManyStoresInputEnvelope_schema_1 = require("./customersCreateManyStoresInputEnvelope.schema");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => customersCreateWithoutStoresInput_schema_1.customersCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => customersCreateWithoutStoresInput_schema_1.customersCreateWithoutStoresInputObjectSchema).array(),
        zod_1.z.lazy(() => customersUncheckedCreateWithoutStoresInput_schema_1.customersUncheckedCreateWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => customersUncheckedCreateWithoutStoresInput_schema_1.customersUncheckedCreateWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => customersCreateOrConnectWithoutStoresInput_schema_1.customersCreateOrConnectWithoutStoresInputObjectSchema),
        zod_1.z
            .lazy(() => customersCreateOrConnectWithoutStoresInput_schema_1.customersCreateOrConnectWithoutStoresInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => customersCreateManyStoresInputEnvelope_schema_1.customersCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.customersUncheckedCreateNestedManyWithoutStoresInputObjectSchema = Schema;
