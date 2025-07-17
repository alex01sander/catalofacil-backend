"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.One_time_tokensMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    token_type: zod_1.z.literal(true).optional(),
    token_hash: zod_1.z.literal(true).optional(),
    relates_to: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
})
    .strict();
exports.One_time_tokensMinAggregateInputObjectSchema = Schema;
