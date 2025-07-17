"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh_tokensCreateWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z.string().optional().nullable(),
    id: zod_1.z.bigint().optional(),
    token: zod_1.z.string().optional().nullable(),
    user_id: zod_1.z.string().optional().nullable(),
    revoked: zod_1.z.boolean().optional().nullable(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    parent: zod_1.z.string().optional().nullable(),
})
    .strict();
exports.refresh_tokensCreateWithoutSessionsInputObjectSchema = Schema;
