"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUncheckedCreateNestedManyWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateWithoutUsersInput_schema_1 = require("./ordersCreateWithoutUsersInput.schema");
const ordersUncheckedCreateWithoutUsersInput_schema_1 = require("./ordersUncheckedCreateWithoutUsersInput.schema");
const ordersCreateOrConnectWithoutUsersInput_schema_1 = require("./ordersCreateOrConnectWithoutUsersInput.schema");
const ordersCreateManyUsersInputEnvelope_schema_1 = require("./ordersCreateManyUsersInputEnvelope.schema");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateWithoutUsersInput_schema_1.ordersCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => ordersCreateWithoutUsersInput_schema_1.ordersCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutUsersInput_schema_1.ordersUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersUncheckedCreateWithoutUsersInput_schema_1.ordersUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersCreateOrConnectWithoutUsersInput_schema_1.ordersCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => ordersCreateOrConnectWithoutUsersInput_schema_1.ordersCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => ordersCreateManyUsersInputEnvelope_schema_1.ordersCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.ordersUncheckedCreateNestedManyWithoutUsersInputObjectSchema = Schema;
