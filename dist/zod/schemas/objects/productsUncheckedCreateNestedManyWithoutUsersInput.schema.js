"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUncheckedCreateNestedManyWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateWithoutUsersInput_schema_1 = require("./productsCreateWithoutUsersInput.schema");
const productsUncheckedCreateWithoutUsersInput_schema_1 = require("./productsUncheckedCreateWithoutUsersInput.schema");
const productsCreateOrConnectWithoutUsersInput_schema_1 = require("./productsCreateOrConnectWithoutUsersInput.schema");
const productsCreateManyUsersInputEnvelope_schema_1 = require("./productsCreateManyUsersInputEnvelope.schema");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => productsCreateWithoutUsersInput_schema_1.productsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => productsCreateWithoutUsersInput_schema_1.productsCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => productsUncheckedCreateWithoutUsersInput_schema_1.productsUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => productsUncheckedCreateWithoutUsersInput_schema_1.productsUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => productsCreateOrConnectWithoutUsersInput_schema_1.productsCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => productsCreateOrConnectWithoutUsersInput_schema_1.productsCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => productsCreateManyUsersInputEnvelope_schema_1.productsCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.productsUncheckedCreateNestedManyWithoutUsersInputObjectSchema = Schema;
