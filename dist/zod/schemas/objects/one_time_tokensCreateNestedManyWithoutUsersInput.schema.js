"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one_time_tokensCreateNestedManyWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_tokensCreateWithoutUsersInput_schema_1 = require("./one_time_tokensCreateWithoutUsersInput.schema");
const one_time_tokensUncheckedCreateWithoutUsersInput_schema_1 = require("./one_time_tokensUncheckedCreateWithoutUsersInput.schema");
const one_time_tokensCreateOrConnectWithoutUsersInput_schema_1 = require("./one_time_tokensCreateOrConnectWithoutUsersInput.schema");
const one_time_tokensCreateManyUsersInputEnvelope_schema_1 = require("./one_time_tokensCreateManyUsersInputEnvelope.schema");
const one_time_tokensWhereUniqueInput_schema_1 = require("./one_time_tokensWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensCreateWithoutUsersInput_schema_1.one_time_tokensCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => one_time_tokensCreateWithoutUsersInput_schema_1.one_time_tokensCreateWithoutUsersInputObjectSchema)
            .array(),
        zod_1.z.lazy(() => one_time_tokensUncheckedCreateWithoutUsersInput_schema_1.one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => one_time_tokensUncheckedCreateWithoutUsersInput_schema_1.one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensCreateOrConnectWithoutUsersInput_schema_1.one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema),
        zod_1.z
            .lazy(() => one_time_tokensCreateOrConnectWithoutUsersInput_schema_1.one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(() => one_time_tokensCreateManyUsersInputEnvelope_schema_1.one_time_tokensCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => one_time_tokensWhereUniqueInput_schema_1.one_time_tokensWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.one_time_tokensCreateNestedManyWithoutUsersInputObjectSchema = Schema;
