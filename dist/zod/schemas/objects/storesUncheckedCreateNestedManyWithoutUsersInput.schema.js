"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUncheckedCreateNestedManyWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutUsersInput_schema_1 = require("./storesCreateWithoutUsersInput.schema");
const storesUncheckedCreateWithoutUsersInput_schema_1 = require("./storesUncheckedCreateWithoutUsersInput.schema");
const storesCreateOrConnectWithoutUsersInput_schema_1 = require("./storesCreateOrConnectWithoutUsersInput.schema");
const storesCreateManyUsersInputEnvelope_schema_1 = require("./storesCreateManyUsersInputEnvelope.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
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
    createMany: zod_1.z
        .lazy(() => storesCreateManyUsersInputEnvelope_schema_1.storesCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
        zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).array(),
    ])
        .optional(),
})
    .strict();
exports.storesUncheckedCreateNestedManyWithoutUsersInputObjectSchema = Schema;
