import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { identitiesCreateNestedManyWithoutUsersInputObjectSchema } from './identitiesCreateNestedManyWithoutUsersInput.schema';
import { mfa_factorsCreateNestedManyWithoutUsersInputObjectSchema } from './mfa_factorsCreateNestedManyWithoutUsersInput.schema';
import { one_time_tokensCreateNestedManyWithoutUsersInputObjectSchema } from './one_time_tokensCreateNestedManyWithoutUsersInput.schema';
import { sessionsCreateNestedManyWithoutUsersInputObjectSchema } from './sessionsCreateNestedManyWithoutUsersInput.schema';
import { categoriesCreateNestedManyWithoutUsersInputObjectSchema } from './categoriesCreateNestedManyWithoutUsersInput.schema';
import { controller_adminsCreateNestedOneWithoutUsersInputObjectSchema } from './controller_adminsCreateNestedOneWithoutUsersInput.schema';
import { domain_ownersCreateNestedManyWithoutUsersInputObjectSchema } from './domain_ownersCreateNestedManyWithoutUsersInput.schema';
import { ordersCreateNestedManyWithoutUsersInputObjectSchema } from './ordersCreateNestedManyWithoutUsersInput.schema';
import { productsCreateNestedManyWithoutUsersInputObjectSchema } from './productsCreateNestedManyWithoutUsersInput.schema';
import { profilesCreateNestedOneWithoutUsersInputObjectSchema } from './profilesCreateNestedOneWithoutUsersInput.schema';
import { store_settingsCreateNestedOneWithoutUsersInputObjectSchema } from './store_settingsCreateNestedOneWithoutUsersInput.schema';
import { storesCreateNestedManyWithoutUsersInputObjectSchema } from './storesCreateNestedManyWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.usersCreateWithoutCustomersInput> = z
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
      .lazy(() => identitiesCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    mfa_factors: z
      .lazy(() => mfa_factorsCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    one_time_tokens: z
      .lazy(() => one_time_tokensCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => sessionsCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    categories: z
      .lazy(() => categoriesCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    controller_admins: z
      .lazy(() => controller_adminsCreateNestedOneWithoutUsersInputObjectSchema)
      .optional(),
    domain_owners: z
      .lazy(() => domain_ownersCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => ordersCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => productsCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    profiles: z
      .lazy(() => profilesCreateNestedOneWithoutUsersInputObjectSchema)
      .optional(),
    store_settings: z
      .lazy(() => store_settingsCreateNestedOneWithoutUsersInputObjectSchema)
      .optional(),
    stores: z
      .lazy(() => storesCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
  })
  .strict();

export const usersCreateWithoutCustomersInputObjectSchema = Schema;
