"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    factor_id: zod_1.z.literal(true).optional(),
    aal: zod_1.z.literal(true).optional(),
    not_after: zod_1.z.literal(true).optional(),
    refreshed_at: zod_1.z.literal(true).optional(),
    user_agent: zod_1.z.literal(true).optional(),
    ip: zod_1.z.literal(true).optional(),
    tag: zod_1.z.literal(true).optional(),
})
    .strict();
exports.SessionsMaxAggregateInputObjectSchema = Schema;
