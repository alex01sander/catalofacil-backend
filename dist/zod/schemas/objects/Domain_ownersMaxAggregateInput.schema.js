"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain_ownersMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    domain: zod_1.z.literal(true).optional(),
    user_id: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    domain_type: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Domain_ownersMaxAggregateInputObjectSchema = Schema;
