"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsCreateManySessionsInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const mfa_amr_claimsCreateManySessionsInput_schema_1 = require("./mfa_amr_claimsCreateManySessionsInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => mfa_amr_claimsCreateManySessionsInput_schema_1.mfa_amr_claimsCreateManySessionsInputObjectSchema),
        zod_1.z.lazy(() => mfa_amr_claimsCreateManySessionsInput_schema_1.mfa_amr_claimsCreateManySessionsInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.mfa_amr_claimsCreateManySessionsInputEnvelopeObjectSchema = Schema;
