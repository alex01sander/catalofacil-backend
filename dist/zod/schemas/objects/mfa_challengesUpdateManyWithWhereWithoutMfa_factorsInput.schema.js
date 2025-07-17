"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_challengesScalarWhereInput_schema_1 = require("./mfa_challengesScalarWhereInput.schema");
const mfa_challengesUpdateManyMutationInput_schema_1 = require("./mfa_challengesUpdateManyMutationInput.schema");
const mfa_challengesUncheckedUpdateManyWithoutMfa_challengesInput_schema_1 = require("./mfa_challengesUncheckedUpdateManyWithoutMfa_challengesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => mfa_challengesScalarWhereInput_schema_1.mfa_challengesScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => mfa_challengesUpdateManyMutationInput_schema_1.mfa_challengesUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => mfa_challengesUncheckedUpdateManyWithoutMfa_challengesInput_schema_1.mfa_challengesUncheckedUpdateManyWithoutMfa_challengesInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInputObjectSchema = Schema;
