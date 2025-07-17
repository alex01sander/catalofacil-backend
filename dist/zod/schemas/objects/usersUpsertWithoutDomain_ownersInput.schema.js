"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutDomain_ownersInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutDomain_ownersInput_schema_1 = require("./usersUpdateWithoutDomain_ownersInput.schema");
const usersUncheckedUpdateWithoutDomain_ownersInput_schema_1 = require("./usersUncheckedUpdateWithoutDomain_ownersInput.schema");
const usersCreateWithoutDomain_ownersInput_schema_1 = require("./usersCreateWithoutDomain_ownersInput.schema");
const usersUncheckedCreateWithoutDomain_ownersInput_schema_1 = require("./usersUncheckedCreateWithoutDomain_ownersInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutDomain_ownersInput_schema_1.usersUpdateWithoutDomain_ownersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutDomain_ownersInput_schema_1.usersUncheckedUpdateWithoutDomain_ownersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutDomain_ownersInput_schema_1.usersCreateWithoutDomain_ownersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutDomain_ownersInput_schema_1.usersUncheckedCreateWithoutDomain_ownersInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutDomain_ownersInputObjectSchema = Schema;
