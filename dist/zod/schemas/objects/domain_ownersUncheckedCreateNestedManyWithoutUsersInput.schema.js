"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domain_ownersUncheckedCreateNestedManyWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const domain_ownersCreateWithoutUsersInput_schema_1 = require("./domain_ownersCreateWithoutUsersInput.schema");
const domain_ownersUncheckedCreateWithoutUsersInput_schema_1 = require("./domain_ownersUncheckedCreateWithoutUsersInput.schema");
const domain_ownersCreateOrConnectWithoutUsersInput_schema_1 = require("./domain_ownersCreateOrConnectWithoutUsersInput.schema");
const domain_ownersCreateManyUsersInputEnvelope_schema_1 = require("./domain_ownersCreateManyUsersInputEnvelope.schema");
const domain_ownersWhereUniqueInput_schema_1 = require("./domain_ownersWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => domain_ownersCreateManyUsersInputEnvelope_schema_1.domain_ownersCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.domain_ownersUncheckedCreateNestedManyWithoutUsersInputObjectSchema = Schema;
