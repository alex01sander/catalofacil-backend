"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesCreateNestedManyWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesCreateWithoutUsersInput_schema_1 = require("./categoriesCreateWithoutUsersInput.schema");
const categoriesUncheckedCreateWithoutUsersInput_schema_1 = require("./categoriesUncheckedCreateWithoutUsersInput.schema");
const categoriesCreateOrConnectWithoutUsersInput_schema_1 = require("./categoriesCreateOrConnectWithoutUsersInput.schema");
const categoriesCreateManyUsersInputEnvelope_schema_1 = require("./categoriesCreateManyUsersInputEnvelope.schema");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesCreateWithoutUsersInput_schema_1.categoriesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => categoriesCreateWithoutUsersInput_schema_1.categoriesCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => categoriesUncheckedCreateWithoutUsersInput_schema_1.categoriesUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => categoriesUncheckedCreateWithoutUsersInput_schema_1.categoriesUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesCreateOrConnectWithoutUsersInput_schema_1.categoriesCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => categoriesCreateOrConnectWithoutUsersInput_schema_1.categoriesCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => categoriesCreateManyUsersInputEnvelope_schema_1.categoriesCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.categoriesCreateNestedManyWithoutUsersInputObjectSchema = Schema;
