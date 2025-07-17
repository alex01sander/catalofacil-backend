"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refresh_tokensMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z.literal(true).optional(),
    id: zod_1.z.literal(true).optional(),
    token: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    revoked: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    parent: zod_1.z.literal(true).optional(),
    session_id: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Refresh_tokensMinAggregateInputObjectSchema = Schema;
