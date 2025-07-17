"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutMfa_factorsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutMfa_factorsInput_schema_1 = require("./usersUpdateWithoutMfa_factorsInput.schema");
const usersUncheckedUpdateWithoutMfa_factorsInput_schema_1 = require("./usersUncheckedUpdateWithoutMfa_factorsInput.schema");
const usersCreateWithoutMfa_factorsInput_schema_1 = require("./usersCreateWithoutMfa_factorsInput.schema");
const usersUncheckedCreateWithoutMfa_factorsInput_schema_1 = require("./usersUncheckedCreateWithoutMfa_factorsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutMfa_factorsInput_schema_1.usersUpdateWithoutMfa_factorsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutMfa_factorsInput_schema_1.usersUncheckedUpdateWithoutMfa_factorsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutMfa_factorsInput_schema_1.usersCreateWithoutMfa_factorsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutMfa_factorsInput_schema_1.usersUncheckedCreateWithoutMfa_factorsInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutMfa_factorsInputObjectSchema = Schema;
