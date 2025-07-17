"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUncheckedUpdateManyWithoutUserNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainCreateWithoutUserInput_schema_1 = require("./DomainCreateWithoutUserInput.schema");
const DomainUncheckedCreateWithoutUserInput_schema_1 = require("./DomainUncheckedCreateWithoutUserInput.schema");
const DomainCreateOrConnectWithoutUserInput_schema_1 = require("./DomainCreateOrConnectWithoutUserInput.schema");
const DomainUpsertWithWhereUniqueWithoutUserInput_schema_1 = require("./DomainUpsertWithWhereUniqueWithoutUserInput.schema");
const DomainCreateManyUserInputEnvelope_schema_1 = require("./DomainCreateManyUserInputEnvelope.schema");
const DomainWhereUniqueInput_schema_1 = require("./DomainWhereUniqueInput.schema");
const DomainUpdateWithWhereUniqueWithoutUserInput_schema_1 = require("./DomainUpdateWithWhereUniqueWithoutUserInput.schema");
const DomainUpdateManyWithWhereWithoutUserInput_schema_1 = require("./DomainUpdateManyWithWhereWithoutUserInput.schema");
const DomainScalarWhereInput_schema_1 = require("./DomainScalarWhereInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainCreateWithoutUserInput_schema_1.DomainCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => DomainCreateWithoutUserInput_schema_1.DomainCreateWithoutUserInputObjectSchema).array(),
        zod_1.z.lazy(() => DomainUncheckedCreateWithoutUserInput_schema_1.DomainUncheckedCreateWithoutUserInputObjectSchema),
        zod_1.z
            .lazy(() => DomainUncheckedCreateWithoutUserInput_schema_1.DomainUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainCreateOrConnectWithoutUserInput_schema_1.DomainCreateOrConnectWithoutUserInputObjectSchema),
        zod_1.z
            .lazy(() => DomainCreateOrConnectWithoutUserInput_schema_1.DomainCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
    ])
        .optional(),
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainUpsertWithWhereUniqueWithoutUserInput_schema_1.DomainUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z
            .lazy(() => DomainUpsertWithWhereUniqueWithoutUserInput_schema_1.DomainUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => DomainCreateManyUserInputEnvelope_schema_1.DomainCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    delete: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainUpdateWithWhereUniqueWithoutUserInput_schema_1.DomainUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        zod_1.z
            .lazy(() => DomainUpdateWithWhereUniqueWithoutUserInput_schema_1.DomainUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainUpdateManyWithWhereWithoutUserInput_schema_1.DomainUpdateManyWithWhereWithoutUserInputObjectSchema),
        zod_1.z
            .lazy(() => DomainUpdateManyWithWhereWithoutUserInput_schema_1.DomainUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainScalarWhereInput_schema_1.DomainScalarWhereInputObjectSchema),
        zod_1.z.lazy(() => DomainScalarWhereInput_schema_1.DomainScalarWhereInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.DomainUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;
