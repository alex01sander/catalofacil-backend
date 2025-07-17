"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domain_ownersUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const domain_ownersCreateWithoutUsersInput_schema_1 = require("./domain_ownersCreateWithoutUsersInput.schema");
const domain_ownersUncheckedCreateWithoutUsersInput_schema_1 = require("./domain_ownersUncheckedCreateWithoutUsersInput.schema");
const domain_ownersCreateOrConnectWithoutUsersInput_schema_1 = require("./domain_ownersCreateOrConnectWithoutUsersInput.schema");
const domain_ownersUpsertWithWhereUniqueWithoutUsersInput_schema_1 = require("./domain_ownersUpsertWithWhereUniqueWithoutUsersInput.schema");
const domain_ownersCreateManyUsersInputEnvelope_schema_1 = require("./domain_ownersCreateManyUsersInputEnvelope.schema");
const domain_ownersWhereUniqueInput_schema_1 = require("./domain_ownersWhereUniqueInput.schema");
const domain_ownersUpdateWithWhereUniqueWithoutUsersInput_schema_1 = require("./domain_ownersUpdateWithWhereUniqueWithoutUsersInput.schema");
const domain_ownersUpdateManyWithWhereWithoutUsersInput_schema_1 = require("./domain_ownersUpdateManyWithWhereWithoutUsersInput.schema");
const domain_ownersScalarWhereInput_schema_1 = require("./domain_ownersScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersCreateWithoutUsersInput_schema_1.domain_ownersCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => domain_ownersCreateWithoutUsersInput_schema_1.domain_ownersCreateWithoutUsersInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => domain_ownersUncheckedCreateWithoutUsersInput_schema_1.domain_ownersUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => domain_ownersUncheckedCreateWithoutUsersInput_schema_1.domain_ownersUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersCreateOrConnectWithoutUsersInput_schema_1.domain_ownersCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => domain_ownersCreateOrConnectWithoutUsersInput_schema_1.domain_ownersCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersUpsertWithWhereUniqueWithoutUsersInput_schema_1.domain_ownersUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => domain_ownersUpsertWithWhereUniqueWithoutUsersInput_schema_1.domain_ownersUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => domain_ownersCreateManyUsersInputEnvelope_schema_1.domain_ownersCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersUpdateWithWhereUniqueWithoutUsersInput_schema_1.domain_ownersUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => domain_ownersUpdateWithWhereUniqueWithoutUsersInput_schema_1.domain_ownersUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersUpdateManyWithWhereWithoutUsersInput_schema_1.domain_ownersUpdateManyWithWhereWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => domain_ownersUpdateManyWithWhereWithoutUsersInput_schema_1.domain_ownersUpdateManyWithWhereWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersScalarWhereInput_schema_1.domain_ownersScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersScalarWhereInput_schema_1.domain_ownersScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.domain_ownersUncheckedUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
