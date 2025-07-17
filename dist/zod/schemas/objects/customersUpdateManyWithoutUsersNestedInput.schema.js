"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUpdateManyWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersCreateWithoutUsersInput_schema_1 = require("./customersCreateWithoutUsersInput.schema");
const customersUncheckedCreateWithoutUsersInput_schema_1 = require("./customersUncheckedCreateWithoutUsersInput.schema");
const customersCreateOrConnectWithoutUsersInput_schema_1 = require("./customersCreateOrConnectWithoutUsersInput.schema");
const customersUpsertWithWhereUniqueWithoutUsersInput_schema_1 = require("./customersUpsertWithWhereUniqueWithoutUsersInput.schema");
const customersCreateManyUsersInputEnvelope_schema_1 = require("./customersCreateManyUsersInputEnvelope.schema");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const customersUpdateWithWhereUniqueWithoutUsersInput_schema_1 = require("./customersUpdateWithWhereUniqueWithoutUsersInput.schema");
const customersUpdateManyWithWhereWithoutUsersInput_schema_1 = require("./customersUpdateManyWithWhereWithoutUsersInput.schema");
const customersScalarWhereInput_schema_1 = require("./customersScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => customersUpsertWithWhereUniqueWithoutUsersInput_schema_1.customersUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => customersUpsertWithWhereUniqueWithoutUsersInput_schema_1.customersUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => customersCreateManyUsersInputEnvelope_schema_1.customersCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => customersUpdateWithWhereUniqueWithoutUsersInput_schema_1.customersUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => customersUpdateWithWhereUniqueWithoutUsersInput_schema_1.customersUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => customersUpdateManyWithWhereWithoutUsersInput_schema_1.customersUpdateManyWithWhereWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => customersUpdateManyWithWhereWithoutUsersInput_schema_1.customersUpdateManyWithWhereWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => customersScalarWhereInput_schema_1.customersScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => customersScalarWhereInput_schema_1.customersScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.customersUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
