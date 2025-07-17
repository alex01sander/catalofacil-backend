"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema = void 0;
const zod_1 = require("zod");
const code_challenge_method_schema_1 = require("../enums/code_challenge_method.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string(),
    user_id: zod_1.z.string().optional().nullable(),
    auth_code: zod_1.z.string(),
    code_challenge_method: zod_1.z.lazy(() => code_challenge_method_schema_1.code_challenge_methodSchema),
    code_challenge: zod_1.z.string(),
    provider_type: zod_1.z.string(),
    provider_access_token: zod_1.z.string().optional().nullable(),
    provider_refresh_token: zod_1.z.string().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    authentication_method: zod_1.z.string(),
    auth_code_issued_at: zod_1.z.coerce.date().optional().nullable(),
})
    .strict();
exports.flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema = Schema;
