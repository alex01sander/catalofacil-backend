"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audit_log_entriesMaxAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z.literal(true).optional(),
    id: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    ip_address: zod_1.z.literal(true).optional(),
})
    .strict();
exports.Audit_log_entriesMaxAggregateInputObjectSchema = Schema;
