"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsCreateWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const aal_level_schema_1 = require("../enums/aal_level.schema");
const mfa_amr_claimsCreateNestedManyWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsCreateNestedManyWithoutSessionsInput.schema");
const refresh_tokensCreateNestedManyWithoutSessionsInput_schema_1 = require("./refresh_tokensCreateNestedManyWithoutSessionsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    factor_id: zod_1.z.string().optional().nullable(),
    aal: zod_1.z
        .lazy(() => aal_level_schema_1.aal_levelSchema)
        .optional()
        .nullable(),
    not_after: zod_1.z.coerce.date().optional().nullable(),
    refreshed_at: zod_1.z.coerce.date().optional().nullable(),
    user_agent: zod_1.z.string().optional().nullable(),
    ip: zod_1.z.string().optional().nullable(),
    tag: zod_1.z.string().optional().nullable(),
    mfa_amr_claims: zod_1.z
        .lazy(() => mfa_amr_claimsCreateNestedManyWithoutSessionsInput_schema_1.mfa_amr_claimsCreateNestedManyWithoutSessionsInputObjectSchema)
        .optional(),
    refresh_tokens: zod_1.z
        .lazy(() => refresh_tokensCreateNestedManyWithoutSessionsInput_schema_1.refresh_tokensCreateNestedManyWithoutSessionsInputObjectSchema)
        .optional(),
})
    .strict();
exports.sessionsCreateWithoutUsersInputObjectSchema = Schema;
