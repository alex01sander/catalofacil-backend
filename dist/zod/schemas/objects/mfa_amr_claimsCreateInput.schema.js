"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mfa_amr_claimsCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsCreateNestedOneWithoutMfa_amr_claimsInput_schema_1 = require("./sessionsCreateNestedOneWithoutMfa_amr_claimsInput.schema");
const Schema = zod_1.z
    .object({
    created_at: zod_1.z.coerce.date(),
    updated_at: zod_1.z.coerce.date(),
    authentication_method: zod_1.z.string(),
    id: zod_1.z.string(),
    sessions: zod_1.z.lazy(() => sessionsCreateNestedOneWithoutMfa_amr_claimsInput_schema_1.sessionsCreateNestedOneWithoutMfa_amr_claimsInputObjectSchema),
})
    .strict();
exports.mfa_amr_claimsCreateInputObjectSchema = Schema;
