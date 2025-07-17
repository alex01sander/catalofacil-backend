"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesCreateWithoutUsersInput_schema_1 = require("./categoriesCreateWithoutUsersInput.schema");
const categoriesUncheckedCreateWithoutUsersInput_schema_1 = require("./categoriesUncheckedCreateWithoutUsersInput.schema");
const categoriesCreateOrConnectWithoutUsersInput_schema_1 = require("./categoriesCreateOrConnectWithoutUsersInput.schema");
const categoriesUpsertWithWhereUniqueWithoutUsersInput_schema_1 = require("./categoriesUpsertWithWhereUniqueWithoutUsersInput.schema");
const categoriesCreateManyUsersInputEnvelope_schema_1 = require("./categoriesCreateManyUsersInputEnvelope.schema");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const categoriesUpdateWithWhereUniqueWithoutUsersInput_schema_1 = require("./categoriesUpdateWithWhereUniqueWithoutUsersInput.schema");
const categoriesUpdateManyWithWhereWithoutUsersInput_schema_1 = require("./categoriesUpdateManyWithWhereWithoutUsersInput.schema");
const categoriesScalarWhereInput_schema_1 = require("./categoriesScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesUpsertWithWhereUniqueWithoutUsersInput_schema_1.categoriesUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => categoriesUpsertWithWhereUniqueWithoutUsersInput_schema_1.categoriesUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => categoriesCreateManyUsersInputEnvelope_schema_1.categoriesCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesUpdateWithWhereUniqueWithoutUsersInput_schema_1.categoriesUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => categoriesUpdateWithWhereUniqueWithoutUsersInput_schema_1.categoriesUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesUpdateManyWithWhereWithoutUsersInput_schema_1.categoriesUpdateManyWithWhereWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => categoriesUpdateManyWithWhereWithoutUsersInput_schema_1.categoriesUpdateManyWithWhereWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => categoriesScalarWhereInput_schema_1.categoriesScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => categoriesScalarWhereInput_schema_1.categoriesScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.categoriesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
