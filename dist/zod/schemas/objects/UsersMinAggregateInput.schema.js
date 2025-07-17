"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMinAggregateInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    instance_id: zod_1.z.literal(true).optional(),
    id: zod_1.z.literal(true).optional(),
    aud: zod_1.z.literal(true).optional(),
    role: zod_1.z.literal(true).optional(),
    email: zod_1.z.literal(true).optional(),
    encrypted_password: zod_1.z.literal(true).optional(),
    email_confirmed_at: zod_1.z.literal(true).optional(),
    invited_at: zod_1.z.literal(true).optional(),
    confirmation_token: zod_1.z.literal(true).optional(),
    confirmation_sent_at: zod_1.z.literal(true).optional(),
    recovery_token: zod_1.z.literal(true).optional(),
    recovery_sent_at: zod_1.z.literal(true).optional(),
    email_change_token_new: zod_1.z.literal(true).optional(),
    email_change: zod_1.z.literal(true).optional(),
    email_change_sent_at: zod_1.z.literal(true).optional(),
    last_sign_in_at: zod_1.z.literal(true).optional(),
    is_super_admin: zod_1.z.literal(true).optional(),
    created_at: zod_1.z.literal(true).optional(),
    updated_at: zod_1.z.literal(true).optional(),
    phone: zod_1.z.literal(true).optional(),
    phone_confirmed_at: zod_1.z.literal(true).optional(),
    phone_change: zod_1.z.literal(true).optional(),
    phone_change_token: zod_1.z.literal(true).optional(),
    phone_change_sent_at: zod_1.z.literal(true).optional(),
    confirmed_at: zod_1.z.literal(true).optional(),
    email_change_token_current: zod_1.z.literal(true).optional(),
    email_change_confirm_status: zod_1.z.literal(true).optional(),
    banned_until: zod_1.z.literal(true).optional(),
    reauthentication_token: zod_1.z.literal(true).optional(),
    reauthentication_sent_at: zod_1.z.literal(true).optional(),
    is_sso_user: zod_1.z.literal(true).optional(),
    deleted_at: zod_1.z.literal(true).optional(),
    is_anonymous: zod_1.z.literal(true).optional(),
})
    .strict();
exports.UsersMinAggregateInputObjectSchema = Schema;
