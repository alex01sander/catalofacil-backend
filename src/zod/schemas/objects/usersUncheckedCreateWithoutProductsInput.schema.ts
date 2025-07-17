import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { identitiesUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './identitiesUncheckedCreateNestedManyWithoutUsersInput.schema';
import { mfa_factorsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './mfa_factorsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { one_time_tokensUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './one_time_tokensUncheckedCreateNestedManyWithoutUsersInput.schema';
import { sessionsUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './sessionsUncheckedCreateNestedManyWithoutUsersInput.schema';
import { categoriesUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './categoriesUncheckedCreateNestedManyWithoutUsersInput.schema';
import { controller_adminsUncheckedCreateNestedOneWithoutUsersInputObjectSchema } from './controller_adminsUncheckedCreateNestedOneWithoutUsersInput.schema';
import { customersUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './customersUncheckedCreateNestedManyWithoutUsersInput.schema';
import { domain_ownersUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './domain_ownersUncheckedCreateNestedManyWithoutUsersInput.schema';
import { ordersUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './ordersUncheckedCreateNestedManyWithoutUsersInput.schema';
import { profilesUncheckedCreateNestedOneWithoutUsersInputObjectSchema } from './profilesUncheckedCreateNestedOneWithoutUsersInput.schema';
import { store_settingsUncheckedCreateNestedOneWithoutUsersInputObjectSchema } from './store_settingsUncheckedCreateNestedOneWithoutUsersInput.schema';
import { storesUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './storesUncheckedCreateNestedManyWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.usersUncheckedCreateWithoutProductsInput> = z
  .object({
    instance_id: z.string().optional().nullable(),
    id: z.string(),
    aud: z.string().optional().nullable(),
    role: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    encrypted_password: z.string().optional().nullable(),
    email_confirmed_at: z.coerce.date().optional().nullable(),
    invited_at: z.coerce.date().optional().nullable(),
    confirmation_token: z.string().optional().nullable(),
    confirmation_sent_at: z.coerce.date().optional().nullable(),
    recovery_token: z.string().optional().nullable(),
    recovery_sent_at: z.coerce.date().optional().nullable(),
    email_change_token_new: z.string().optional().nullable(),
    email_change: z.string().optional().nullable(),
    email_change_sent_at: z.coerce.date().optional().nullable(),
    last_sign_in_at: z.coerce.date().optional().nullable(),
    raw_app_meta_data: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    raw_user_meta_data: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    is_super_admin: z.boolean().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    phone: z.string().optional().nullable(),
    phone_confirmed_at: z.coerce.date().optional().nullable(),
    phone_change: z.string().optional().nullable(),
    phone_change_token: z.string().optional().nullable(),
    phone_change_sent_at: z.coerce.date().optional().nullable(),
    confirmed_at: z.coerce.date().optional().nullable(),
    email_change_token_current: z.string().optional().nullable(),
    email_change_confirm_status: z.number().optional().nullable(),
    banned_until: z.coerce.date().optional().nullable(),
    reauthentication_token: z.string().optional().nullable(),
    reauthentication_sent_at: z.coerce.date().optional().nullable(),
    is_sso_user: z.boolean().optional(),
    deleted_at: z.coerce.date().optional().nullable(),
    is_anonymous: z.boolean().optional(),
    identities: z
      .lazy(
        () => identitiesUncheckedCreateNestedManyWithoutUsersInputObjectSchema,
      )
      .optional(),
    mfa_factors: z
      .lazy(
        () => mfa_factorsUncheckedCreateNestedManyWithoutUsersInputObjectSchema,
      )
      .optional(),
    one_time_tokens: z
      .lazy(
        () =>
          one_time_tokensUncheckedCreateNestedManyWithoutUsersInputObjectSchema,
      )
      .optional(),
    sessions: z
      .lazy(
        () => sessionsUncheckedCreateNestedManyWithoutUsersInputObjectSchema,
      )
      .optional(),
    categories: z
      .lazy(
        () => categoriesUncheckedCreateNestedManyWithoutUsersInputObjectSchema,
      )
      .optional(),
    controller_admins: z
      .lazy(
        () =>
          controller_adminsUncheckedCreateNestedOneWithoutUsersInputObjectSchema,
      )
      .optional(),
    customers: z
      .lazy(
        () => customersUncheckedCreateNestedManyWithoutUsersInputObjectSchema,
      )
      .optional(),
    domain_owners: z
      .lazy(
        () =>
          domain_ownersUncheckedCreateNestedManyWithoutUsersInputObjectSchema,
      )
      .optional(),
    orders: z
      .lazy(() => ordersUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    profiles: z
      .lazy(() => profilesUncheckedCreateNestedOneWithoutUsersInputObjectSchema)
      .optional(),
    store_settings: z
      .lazy(
        () =>
          store_settingsUncheckedCreateNestedOneWithoutUsersInputObjectSchema,
      )
      .optional(),
    stores: z
      .lazy(() => storesUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
  })
  .strict();

export const usersUncheckedCreateWithoutProductsInputObjectSchema = Schema;
