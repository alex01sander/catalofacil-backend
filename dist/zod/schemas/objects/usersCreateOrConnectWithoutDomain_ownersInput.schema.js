"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutDomain_ownersInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutDomain_ownersInput_schema_1 = require("./usersCreateWithoutDomain_ownersInput.schema");
const usersUncheckedCreateWithoutDomain_ownersInput_schema_1 = require("./usersUncheckedCreateWithoutDomain_ownersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutDomain_ownersInput_schema_1.usersCreateWithoutDomain_ownersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutDomain_ownersInput_schema_1.usersUncheckedCreateWithoutDomain_ownersInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutDomain_ownersInputObjectSchema = Schema;
