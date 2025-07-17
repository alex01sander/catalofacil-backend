"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsWhereUniqueInput_schema_1 = require("./mfa_factorsWhereUniqueInput.schema");
const mfa_factorsCreateWithoutUsersInput_schema_1 = require("./mfa_factorsCreateWithoutUsersInput.schema");
const mfa_factorsUncheckedCreateWithoutUsersInput_schema_1 = require("./mfa_factorsUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => mfa_factorsWhereUniqueInput_schema_1.mfa_factorsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => mfa_factorsCreateWithoutUsersInput_schema_1.mfa_factorsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsUncheckedCreateWithoutUsersInput_schema_1.mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_factorsCreateOrConnectWithoutUsersInputObjectSchema = Schema;
