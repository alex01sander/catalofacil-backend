"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesCreateNestedManyWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const salesCreateWithoutStoresInput_schema_1 = require("./salesCreateWithoutStoresInput.schema");
const salesUncheckedCreateWithoutStoresInput_schema_1 = require("./salesUncheckedCreateWithoutStoresInput.schema");
const salesCreateOrConnectWithoutStoresInput_schema_1 = require("./salesCreateOrConnectWithoutStoresInput.schema");
const salesCreateManyStoresInputEnvelope_schema_1 = require("./salesCreateManyStoresInputEnvelope.schema");
const salesWhereUniqueInput_schema_1 = require("./salesWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => salesCreateManyStoresInputEnvelope_schema_1.salesCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => salesWhereUniqueInput_schema_1.salesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.salesCreateNestedManyWithoutStoresInputObjectSchema = Schema;
