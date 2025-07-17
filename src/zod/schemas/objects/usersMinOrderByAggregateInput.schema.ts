import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersMinOrderByAggregateInput> = z
  .object({
    instance_id: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    aud: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    encrypted_password: z.lazy(() => SortOrderSchema).optional(),
    email_confirmed_at: z.lazy(() => SortOrderSchema).optional(),
    invited_at: z.lazy(() => SortOrderSchema).optional(),
    confirmation_token: z.lazy(() => SortOrderSchema).optional(),
    confirmation_sent_at: z.lazy(() => SortOrderSchema).optional(),
    recovery_token: z.lazy(() => SortOrderSchema).optional(),
    recovery_sent_at: z.lazy(() => SortOrderSchema).optional(),
    email_change_token_new: z.lazy(() => SortOrderSchema).optional(),
    email_change: z.lazy(() => SortOrderSchema).optional(),
    email_change_sent_at: z.lazy(() => SortOrderSchema).optional(),
    last_sign_in_at: z.lazy(() => SortOrderSchema).optional(),
    is_super_admin: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    phone_confirmed_at: z.lazy(() => SortOrderSchema).optional(),
    phone_change: z.lazy(() => SortOrderSchema).optional(),
    phone_change_token: z.lazy(() => SortOrderSchema).optional(),
    phone_change_sent_at: z.lazy(() => SortOrderSchema).optional(),
    confirmed_at: z.lazy(() => SortOrderSchema).optional(),
    email_change_token_current: z.lazy(() => SortOrderSchema).optional(),
    email_change_confirm_status: z.lazy(() => SortOrderSchema).optional(),
    banned_until: z.lazy(() => SortOrderSchema).optional(),
    reauthentication_token: z.lazy(() => SortOrderSchema).optional(),
    reauthentication_sent_at: z.lazy(() => SortOrderSchema).optional(),
    is_sso_user: z.lazy(() => SortOrderSchema).optional(),
    deleted_at: z.lazy(() => SortOrderSchema).optional(),
    is_anonymous: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const usersMinOrderByAggregateInputObjectSchema = Schema;
