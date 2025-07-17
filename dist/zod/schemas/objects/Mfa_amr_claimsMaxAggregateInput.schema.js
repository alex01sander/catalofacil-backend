"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mfa_amr_claimsMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    session_id: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    authentication_method: zod_1.z.literal(true).optional(),
    id: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Mfa_amr_claimsMaxAggregateInputObjectSchema = Schema;
