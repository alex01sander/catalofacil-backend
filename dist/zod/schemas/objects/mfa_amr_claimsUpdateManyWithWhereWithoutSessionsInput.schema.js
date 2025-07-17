"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_amr_claimsScalarWhereInput_schema_1 = require("./mfa_amr_claimsScalarWhereInput.schema");
const mfa_amr_claimsUpdateManyMutationInput_schema_1 = require("./mfa_amr_claimsUpdateManyMutationInput.schema");
const mfa_amr_claimsUncheckedUpdateManyWithoutMfa_amr_claimsInput_schema_1 = require("./mfa_amr_claimsUncheckedUpdateManyWithoutMfa_amr_claimsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => mfa_amr_claimsScalarWhereInput_schema_1.mfa_amr_claimsScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => mfa_amr_claimsUpdateManyMutationInput_schema_1.mfa_amr_claimsUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => mfa_amr_claimsUncheckedUpdateManyWithoutMfa_amr_claimsInput_schema_1.mfa_amr_claimsUncheckedUpdateManyWithoutMfa_amr_claimsInputObjectSchema),
    ]),
})
    .strict();
exports.mfa_amr_claimsUpdateManyWithWhereWithoutSessionsInputObjectSchema = Schema;
