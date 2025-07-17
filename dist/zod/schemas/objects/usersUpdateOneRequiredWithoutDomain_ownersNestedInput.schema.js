"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutDomain_ownersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutDomain_ownersInput_schema_1 = require("./usersCreateWithoutDomain_ownersInput.schema");
const usersUncheckedCreateWithoutDomain_ownersInput_schema_1 = require("./usersUncheckedCreateWithoutDomain_ownersInput.schema");
const usersCreateOrConnectWithoutDomain_ownersInput_schema_1 = require("./usersCreateOrConnectWithoutDomain_ownersInput.schema");
const usersUpsertWithoutDomain_ownersInput_schema_1 = require("./usersUpsertWithoutDomain_ownersInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutDomain_ownersInput_schema_1 = require("./usersUpdateWithoutDomain_ownersInput.schema");
const usersUncheckedUpdateWithoutDomain_ownersInput_schema_1 = require("./usersUncheckedUpdateWithoutDomain_ownersInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutDomain_ownersInput_schema_1.usersCreateWithoutDomain_ownersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutDomain_ownersInput_schema_1.usersUncheckedCreateWithoutDomain_ownersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutDomain_ownersInput_schema_1.usersCreateOrConnectWithoutDomain_ownersInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutDomain_ownersInput_schema_1.usersUpsertWithoutDomain_ownersInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutDomain_ownersInput_schema_1.usersUpdateWithoutDomain_ownersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutDomain_ownersInput_schema_1.usersUncheckedUpdateWithoutDomain_ownersInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutDomain_ownersNestedInputObjectSchema = Schema;
