import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { identitiesOrderByRelationAggregateInputObjectSchema } from './identitiesOrderByRelationAggregateInput.schema';
import { mfa_factorsOrderByRelationAggregateInputObjectSchema } from './mfa_factorsOrderByRelationAggregateInput.schema';
import { one_time_tokensOrderByRelationAggregateInputObjectSchema } from './one_time_tokensOrderByRelationAggregateInput.schema';
import { sessionsOrderByRelationAggregateInputObjectSchema } from './sessionsOrderByRelationAggregateInput.schema';
import { categoriesOrderByRelationAggregateInputObjectSchema } from './categoriesOrderByRelationAggregateInput.schema';
import { controller_adminsOrderByWithRelationInputObjectSchema } from './controller_adminsOrderByWithRelationInput.schema';
import { customersOrderByRelationAggregateInputObjectSchema } from './customersOrderByRelationAggregateInput.schema';
import { domain_ownersOrderByRelationAggregateInputObjectSchema } from './domain_ownersOrderByRelationAggregateInput.schema';
import { ordersOrderByRelationAggregateInputObjectSchema } from './ordersOrderByRelationAggregateInput.schema';
import { productsOrderByRelationAggregateInputObjectSchema } from './productsOrderByRelationAggregateInput.schema';
import { profilesOrderByWithRelationInputObjectSchema } from './profilesOrderByWithRelationInput.schema';
import { store_settingsOrderByWithRelationInputObjectSchema } from './store_settingsOrderByWithRelationInput.schema';
import { storesOrderByRelationAggregateInputObjectSchema } from './storesOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersOrderByWithRelationInput> = z
  .object({
    instance_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    aud: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    role: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    encrypted_password: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email_confirmed_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    invited_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    confirmation_token: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    confirmation_sent_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    recovery_token: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    recovery_sent_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email_change_token_new: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email_change: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email_change_sent_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    last_sign_in_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    raw_app_meta_data: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    raw_user_meta_data: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    is_super_admin: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    phone: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    phone_confirmed_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    phone_change: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    phone_change_token: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    phone_change_sent_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    confirmed_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email_change_token_current: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email_change_confirm_status: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    banned_until: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    reauthentication_token: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    reauthentication_sent_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    is_sso_user: z.lazy(() => SortOrderSchema).optional(),
    deleted_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    is_anonymous: z.lazy(() => SortOrderSchema).optional(),
    identities: z
      .lazy(() => identitiesOrderByRelationAggregateInputObjectSchema)
      .optional(),
    mfa_factors: z
      .lazy(() => mfa_factorsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    one_time_tokens: z
      .lazy(() => one_time_tokensOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => sessionsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    categories: z
      .lazy(() => categoriesOrderByRelationAggregateInputObjectSchema)
      .optional(),
    controller_admins: z
      .lazy(() => controller_adminsOrderByWithRelationInputObjectSchema)
      .optional(),
    customers: z
      .lazy(() => customersOrderByRelationAggregateInputObjectSchema)
      .optional(),
    domain_owners: z
      .lazy(() => domain_ownersOrderByRelationAggregateInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => ordersOrderByRelationAggregateInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => productsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    profiles: z
      .lazy(() => profilesOrderByWithRelationInputObjectSchema)
      .optional(),
    store_settings: z
      .lazy(() => store_settingsOrderByWithRelationInputObjectSchema)
      .optional(),
    stores: z
      .lazy(() => storesOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const usersOrderByWithRelationInputObjectSchema = Schema;
