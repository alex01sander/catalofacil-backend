import { z } from 'zod';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IdentitiesListRelationFilterObjectSchema } from './IdentitiesListRelationFilter.schema';
import { Mfa_factorsListRelationFilterObjectSchema } from './Mfa_factorsListRelationFilter.schema';
import { One_time_tokensListRelationFilterObjectSchema } from './One_time_tokensListRelationFilter.schema';
import { SessionsListRelationFilterObjectSchema } from './SessionsListRelationFilter.schema';
import { CategoriesListRelationFilterObjectSchema } from './CategoriesListRelationFilter.schema';
import { Controller_adminsRelationFilterObjectSchema } from './Controller_adminsRelationFilter.schema';
import { controller_adminsWhereInputObjectSchema } from './controller_adminsWhereInput.schema';
import { CustomersListRelationFilterObjectSchema } from './CustomersListRelationFilter.schema';
import { Domain_ownersListRelationFilterObjectSchema } from './Domain_ownersListRelationFilter.schema';
import { OrdersListRelationFilterObjectSchema } from './OrdersListRelationFilter.schema';
import { ProductsListRelationFilterObjectSchema } from './ProductsListRelationFilter.schema';
import { ProfilesRelationFilterObjectSchema } from './ProfilesRelationFilter.schema';
import { profilesWhereInputObjectSchema } from './profilesWhereInput.schema';
import { Store_settingsRelationFilterObjectSchema } from './Store_settingsRelationFilter.schema';
import { store_settingsWhereInputObjectSchema } from './store_settingsWhereInput.schema';
import { StoresListRelationFilterObjectSchema } from './StoresListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => usersWhereInputObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => usersWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => usersWhereInputObjectSchema),
        z.lazy(() => usersWhereInputObjectSchema).array(),
      ])
      .optional(),
    instance_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    aud: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    role: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    encrypted_password: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email_confirmed_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    invited_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    confirmation_token: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    confirmation_sent_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    recovery_token: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    recovery_sent_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    email_change_token_new: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email_change: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email_change_sent_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    last_sign_in_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    raw_app_meta_data: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
    raw_user_meta_data: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
    is_super_admin: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone_confirmed_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    phone_change: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone_change_token: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    phone_change_sent_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    confirmed_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    email_change_token_current: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email_change_confirm_status: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    banned_until: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    reauthentication_token: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    reauthentication_sent_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    is_sso_user: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    deleted_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    is_anonymous: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    identities: z
      .lazy(() => IdentitiesListRelationFilterObjectSchema)
      .optional(),
    mfa_factors: z
      .lazy(() => Mfa_factorsListRelationFilterObjectSchema)
      .optional(),
    one_time_tokens: z
      .lazy(() => One_time_tokensListRelationFilterObjectSchema)
      .optional(),
    sessions: z.lazy(() => SessionsListRelationFilterObjectSchema).optional(),
    categories: z
      .lazy(() => CategoriesListRelationFilterObjectSchema)
      .optional(),
    controller_admins: z
      .union([
        z.lazy(() => Controller_adminsRelationFilterObjectSchema),
        z.lazy(() => controller_adminsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    customers: z.lazy(() => CustomersListRelationFilterObjectSchema).optional(),
    domain_owners: z
      .lazy(() => Domain_ownersListRelationFilterObjectSchema)
      .optional(),
    orders: z.lazy(() => OrdersListRelationFilterObjectSchema).optional(),
    products: z.lazy(() => ProductsListRelationFilterObjectSchema).optional(),
    profiles: z
      .union([
        z.lazy(() => ProfilesRelationFilterObjectSchema),
        z.lazy(() => profilesWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    store_settings: z
      .union([
        z.lazy(() => Store_settingsRelationFilterObjectSchema),
        z.lazy(() => store_settingsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    stores: z.lazy(() => StoresListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const usersWhereInputObjectSchema = Schema;
