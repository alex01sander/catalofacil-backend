"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdateManyWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateWithoutUsersInput_schema_1 = require("./productsCreateWithoutUsersInput.schema");
const productsUncheckedCreateWithoutUsersInput_schema_1 = require("./productsUncheckedCreateWithoutUsersInput.schema");
const productsCreateOrConnectWithoutUsersInput_schema_1 = require("./productsCreateOrConnectWithoutUsersInput.schema");
const productsUpsertWithWhereUniqueWithoutUsersInput_schema_1 = require("./productsUpsertWithWhereUniqueWithoutUsersInput.schema");
const productsCreateManyUsersInputEnvelope_schema_1 = require("./productsCreateManyUsersInputEnvelope.schema");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsUpdateWithWhereUniqueWithoutUsersInput_schema_1 = require("./productsUpdateWithWhereUniqueWithoutUsersInput.schema");
const productsUpdateManyWithWhereWithoutUsersInput_schema_1 = require("./productsUpdateManyWithWhereWithoutUsersInput.schema");
const productsScalarWhereInput_schema_1 = require("./productsScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => productsUpsertWithWhereUniqueWithoutUsersInput_schema_1.productsUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => productsUpsertWithWhereUniqueWithoutUsersInput_schema_1.productsUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => productsCreateManyUsersInputEnvelope_schema_1.productsCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => productsUpdateWithWhereUniqueWithoutUsersInput_schema_1.productsUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => productsUpdateWithWhereUniqueWithoutUsersInput_schema_1.productsUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => productsUpdateManyWithWhereWithoutUsersInput_schema_1.productsUpdateManyWithWhereWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => productsUpdateManyWithWhereWithoutUsersInput_schema_1.productsUpdateManyWithWhereWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => productsScalarWhereInput_schema_1.productsScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => productsScalarWhereInput_schema_1.productsScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.productsUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
