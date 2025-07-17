"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_factorsUpdateManyWithWhereWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_factorsScalarWhereInput_schema_1 = require("./mfa_factorsScalarWhereInput.schema");
const mfa_factorsUpdateManyMutationInput_schema_1 = require("./mfa_factorsUpdateManyMutationInput.schema");
const mfa_factorsUncheckedUpdateManyWithoutMfa_factorsInput_schema_1 = require("./mfa_factorsUncheckedUpdateManyWithoutMfa_factorsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => mfa_factorsScalarWhereInput_schema_1.mfa_factorsScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => mfa_factorsUpdateManyMutationInput_schema_1.mfa_factorsUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => mfa_factorsUncheckedUpdateManyWithoutMfa_factorsInput_schema_1.mfa_factorsUncheckedUpdateManyWithoutMfa_factorsInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_factorsUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
