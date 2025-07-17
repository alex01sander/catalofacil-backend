"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsUpdateWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsWhereUniqueInput_schema_1 = require("./mfa_factorsWhereUniqueInput.schema");
const mfa_factorsUpdateWithoutUsersInput_schema_1 = require("./mfa_factorsUpdateWithoutUsersInput.schema");
const mfa_factorsUncheckedUpdateWithoutUsersInput_schema_1 = require("./mfa_factorsUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => mfa_factorsUpdateWithoutUsersInput_schema_1.mfa_factorsUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsUncheckedUpdateWithoutUsersInput_schema_1.mfa_factorsUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_factorsUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
