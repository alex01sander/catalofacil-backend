"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mfa_challengesMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    factor_id: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    verified_at: zod_1.z.literal(true).optional(),
    ip_address: zod_1.z.literal(true).optional(),
    otp_code: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Mfa_challengesMaxAggregateInputObjectSchema = Schema;
