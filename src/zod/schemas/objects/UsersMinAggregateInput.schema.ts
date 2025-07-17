import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsersMinAggregateInputType> = z
  .object({
    instance_id: z.literal(true).optional(),
    id: z.literal(true).optional(),
    aud: z.literal(true).optional(),
    role: z.literal(true).optional(),
    email: z.literal(true).optional(),
    encrypted_password: z.literal(true).optional(),
    email_confirmed_at: z.literal(true).optional(),
    invited_at: z.literal(true).optional(),
    confirmation_token: z.literal(true).optional(),
    confirmation_sent_at: z.literal(true).optional(),
    recovery_token: z.literal(true).optional(),
    recovery_sent_at: z.literal(true).optional(),
    email_change_token_new: z.literal(true).optional(),
    email_change: z.literal(true).optional(),
    email_change_sent_at: z.literal(true).optional(),
    last_sign_in_at: z.literal(true).optional(),
    is_super_admin: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    phone_confirmed_at: z.literal(true).optional(),
    phone_change: z.literal(true).optional(),
    phone_change_token: z.literal(true).optional(),
    phone_change_sent_at: z.literal(true).optional(),
    confirmed_at: z.literal(true).optional(),
    email_change_token_current: z.literal(true).optional(),
    email_change_confirm_status: z.literal(true).optional(),
    banned_until: z.literal(true).optional(),
    reauthentication_token: z.literal(true).optional(),
    reauthentication_sent_at: z.literal(true).optional(),
    is_sso_user: z.literal(true).optional(),
    deleted_at: z.literal(true).optional(),
    is_anonymous: z.literal(true).optional(),
  })
  .strict();

export const UsersMinAggregateInputObjectSchema = Schema;
