"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpdateManyWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutUsersInput_schema_1 = require("./storesCreateWithoutUsersInput.schema");
const storesUncheckedCreateWithoutUsersInput_schema_1 = require("./storesUncheckedCreateWithoutUsersInput.schema");
const storesCreateOrConnectWithoutUsersInput_schema_1 = require("./storesCreateOrConnectWithoutUsersInput.schema");
const storesUpsertWithWhereUniqueWithoutUsersInput_schema_1 = require("./storesUpsertWithWhereUniqueWithoutUsersInput.schema");
const storesCreateManyUsersInputEnvelope_schema_1 = require("./storesCreateManyUsersInputEnvelope.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesUpdateWithWhereUniqueWithoutUsersInput_schema_1 = require("./storesUpdateWithWhereUniqueWithoutUsersInput.schema");
const storesUpdateManyWithWhereWithoutUsersInput_schema_1 = require("./storesUpdateManyWithWhereWithoutUsersInput.schema");
const storesScalarWhereInput_schema_1 = require("./storesScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutUsersInput_schema_1.storesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => storesCreateWithoutUsersInput_schema_1.storesCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutUsersInput_schema_1.storesUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => storesUncheckedCreateWithoutUsersInput_schema_1.storesUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateOrConnectWithoutUsersInput_schema_1.storesCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => storesCreateOrConnectWithoutUsersInput_schema_1.storesCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => storesUpsertWithWhereUniqueWithoutUsersInput_schema_1.storesUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => storesUpsertWithWhereUniqueWithoutUsersInput_schema_1.storesUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => storesCreateManyUsersInputEnvelope_schema_1.storesCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => storesUpdateWithWhereUniqueWithoutUsersInput_schema_1.storesUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => storesUpdateWithWhereUniqueWithoutUsersInput_schema_1.storesUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => storesUpdateManyWithWhereWithoutUsersInput_schema_1.storesUpdateManyWithWhereWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => storesUpdateManyWithWhereWithoutUsersInput_schema_1.storesUpdateManyWithWhereWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => storesScalarWhereInput_schema_1.storesScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => storesScalarWhereInput_schema_1.storesScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.storesUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
