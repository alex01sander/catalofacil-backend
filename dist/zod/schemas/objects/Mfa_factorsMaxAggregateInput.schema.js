"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mfa_factorsMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    friendly_name: zod_1.z.literal(true).optional(),
    factor_type: zod_1.z.literal(true).optional(),
    status: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    secret: zod_1.z.literal(true).optional(),
    phone: zod_1.z.literal(true).optional(),
    last_challenged_at: zod_1.z.literal(true).optional(),
    web_authn_aaguid: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Mfa_factorsMaxAggregateInputObjectSchema = Schema;
