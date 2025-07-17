"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsUncheckedCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const aal_level_schema_1 = require("../enums/aal_level.schema");
const mfa_amr_claimsUncheckedCreateNestedManyWithoutSessionsInput_schema_1 = require("./mfa_amr_claimsUncheckedCreateNestedManyWithoutSessionsInput.schema");
const refresh_tokensUncheckedCreateNestedManyWithoutSessionsInput_schema_1 = require("./refresh_tokensUncheckedCreateNestedManyWithoutSessionsInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    user_id: zod_1.z.string(),
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
        .lazy(() => mfa_amr_claimsUncheckedCreateNestedManyWithoutSessionsInput_schema_1.mfa_amr_claimsUncheckedCreateNestedManyWithoutSessionsInputObjectSchema)
        .optional(),
    refresh_tokens: zod_1.z
        .lazy(() => refresh_tokensUncheckedCreateNestedManyWithoutSessionsInput_schema_1.refresh_tokensUncheckedCreateNestedManyWithoutSessionsInputObjectSchema)
        .optional(),
})
    .strict();
exports.sessionsUncheckedCreateInputObjectSchema = Schema;
