"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesUncheckedCreateNestedManyWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const identitiesCreateWithoutUsersInput_schema_1 = require("./identitiesCreateWithoutUsersInput.schema");
const identitiesUncheckedCreateWithoutUsersInput_schema_1 = require("./identitiesUncheckedCreateWithoutUsersInput.schema");
const identitiesCreateOrConnectWithoutUsersInput_schema_1 = require("./identitiesCreateOrConnectWithoutUsersInput.schema");
const identitiesCreateManyUsersInputEnvelope_schema_1 = require("./identitiesCreateManyUsersInputEnvelope.schema");
const identitiesWhereUniqueInput_schema_1 = require("./identitiesWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesCreateWithoutUsersInput_schema_1.identitiesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => identitiesCreateWithoutUsersInput_schema_1.identitiesCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => identitiesUncheckedCreateWithoutUsersInput_schema_1.identitiesUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => identitiesUncheckedCreateWithoutUsersInput_schema_1.identitiesUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesCreateOrConnectWithoutUsersInput_schema_1.identitiesCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => identitiesCreateOrConnectWithoutUsersInput_schema_1.identitiesCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => identitiesCreateManyUsersInputEnvelope_schema_1.identitiesCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.identitiesUncheckedCreateNestedManyWithoutUsersInputObjectSchema = Schema;
