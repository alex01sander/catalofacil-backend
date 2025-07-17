"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentitiesMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    provider_id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    provider: zod_1.z.literal(true).optional(),
    last_sign_in_at: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    email: zod_1.z.literal(true).optional(),
    id: zod_1.z.literal(true).optional(),
})
    .strict();
exports.IdentitiesMaxAggregateInputObjectSchema = Schema;
