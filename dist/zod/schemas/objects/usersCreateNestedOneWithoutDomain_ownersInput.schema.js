"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateNestedOneWithoutDomain_ownersInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutDomain_ownersInput_schema_1 = require("./usersCreateWithoutDomain_ownersInput.schema");
const usersUncheckedCreateWithoutDomain_ownersInput_schema_1 = require("./usersUncheckedCreateWithoutDomain_ownersInput.schema");
const usersCreateOrConnectWithoutDomain_ownersInput_schema_1 = require("./usersCreateOrConnectWithoutDomain_ownersInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.usersCreateNestedOneWithoutDomain_ownersInputObjectSchema = Schema;
