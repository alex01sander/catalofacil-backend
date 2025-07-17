"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUncheckedCreateNestedManyWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersCreateWithoutUsersInput_schema_1 = require("./customersCreateWithoutUsersInput.schema");
const customersUncheckedCreateWithoutUsersInput_schema_1 = require("./customersUncheckedCreateWithoutUsersInput.schema");
const customersCreateOrConnectWithoutUsersInput_schema_1 = require("./customersCreateOrConnectWithoutUsersInput.schema");
const customersCreateManyUsersInputEnvelope_schema_1 = require("./customersCreateManyUsersInputEnvelope.schema");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => customersCreateWithoutUsersInput_schema_1.customersCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => customersCreateWithoutUsersInput_schema_1.customersCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => customersUncheckedCreateWithoutUsersInput_schema_1.customersUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => customersUncheckedCreateWithoutUsersInput_schema_1.customersUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => customersCreateOrConnectWithoutUsersInput_schema_1.customersCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => customersCreateOrConnectWithoutUsersInput_schema_1.customersCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => customersCreateManyUsersInputEnvelope_schema_1.customersCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.customersUncheckedCreateNestedManyWithoutUsersInputObjectSchema = Schema;
