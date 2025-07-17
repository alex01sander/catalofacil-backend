"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsCreateNestedManyWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsCreateWithoutUsersInput_schema_1 = require("./sessionsCreateWithoutUsersInput.schema");
const sessionsUncheckedCreateWithoutUsersInput_schema_1 = require("./sessionsUncheckedCreateWithoutUsersInput.schema");
const sessionsCreateOrConnectWithoutUsersInput_schema_1 = require("./sessionsCreateOrConnectWithoutUsersInput.schema");
const sessionsCreateManyUsersInputEnvelope_schema_1 = require("./sessionsCreateManyUsersInputEnvelope.schema");
const sessionsWhereUniqueInput_schema_1 = require("./sessionsWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsCreateWithoutUsersInput_schema_1.sessionsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => sessionsCreateWithoutUsersInput_schema_1.sessionsCreateWithoutUsersInputObjectSchema).array(),
        zod_1.z.lazy(() => sessionsUncheckedCreateWithoutUsersInput_schema_1.sessionsUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => sessionsUncheckedCreateWithoutUsersInput_schema_1.sessionsUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsCreateOrConnectWithoutUsersInput_schema_1.sessionsCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => sessionsCreateOrConnectWithoutUsersInput_schema_1.sessionsCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => sessionsCreateManyUsersInputEnvelope_schema_1.sessionsCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.sessionsCreateNestedManyWithoutUsersInputObjectSchema = Schema;
