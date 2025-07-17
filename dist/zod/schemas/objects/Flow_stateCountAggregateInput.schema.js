"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flow_stateCountAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    auth_code: zod_1.z.literal(true).optional(),
    code_challenge_method: zod_1.z.literal(true).optional(),
    code_challenge: zod_1.z.literal(true).optional(),
    provider_type: zod_1.z.literal(true).optional(),
    provider_access_token: zod_1.z.literal(true).optional(),
    provider_refresh_token: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    authentication_method: zod_1.z.literal(true).optional(),
    auth_code_issued_at: zod_1.z.literal(true).optional(),
    _all: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Flow_stateCountAggregateInputObjectSchema = Schema;
