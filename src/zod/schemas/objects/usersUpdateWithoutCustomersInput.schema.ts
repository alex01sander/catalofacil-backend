import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { identitiesUpdateManyWithoutUsersNestedInputObjectSchema } from './identitiesUpdateManyWithoutUsersNestedInput.schema';
import { mfa_factorsUpdateManyWithoutUsersNestedInputObjectSchema } from './mfa_factorsUpdateManyWithoutUsersNestedInput.schema';
import { one_time_tokensUpdateManyWithoutUsersNestedInputObjectSchema } from './one_time_tokensUpdateManyWithoutUsersNestedInput.schema';
import { sessionsUpdateManyWithoutUsersNestedInputObjectSchema } from './sessionsUpdateManyWithoutUsersNestedInput.schema';
import { categoriesUpdateManyWithoutUsersNestedInputObjectSchema } from './categoriesUpdateManyWithoutUsersNestedInput.schema';
import { controller_adminsUpdateOneWithoutUsersNestedInputObjectSchema } from './controller_adminsUpdateOneWithoutUsersNestedInput.schema';
import { domain_ownersUpdateManyWithoutUsersNestedInputObjectSchema } from './domain_ownersUpdateManyWithoutUsersNestedInput.schema';
import { ordersUpdateManyWithoutUsersNestedInputObjectSchema } from './ordersUpdateManyWithoutUsersNestedInput.schema';
import { productsUpdateManyWithoutUsersNestedInputObjectSchema } from './productsUpdateManyWithoutUsersNestedInput.schema';
import { profilesUpdateOneWithoutUsersNestedInputObjectSchema } from './profilesUpdateOneWithoutUsersNestedInput.schema';
import { store_settingsUpdateOneWithoutUsersNestedInputObjectSchema } from './store_settingsUpdateOneWithoutUsersNestedInput.schema';
import { storesUpdateManyWithoutUsersNestedInputObjectSchema } from './storesUpdateManyWithoutUsersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.usersUpdateWithoutCustomersInput> = z
  .object({
    instance_id: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    aud: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    role: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    encrypted_password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email_confirmed_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    invited_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    confirmation_token: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    confirmation_sent_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    recovery_token: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    recovery_sent_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email_change_token_new: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email_change: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email_change_sent_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    last_sign_in_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    raw_app_meta_data: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    raw_user_meta_data: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    is_super_admin: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    updated_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    phone_confirmed_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    phone_change: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    phone_change_token: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    phone_change_sent_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    confirmed_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email_change_token_current: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email_change_confirm_status: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    banned_until: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    reauthentication_token: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    reauthentication_sent_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    is_sso_user: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    deleted_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    is_anonymous: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    identities: z
      .lazy(() => identitiesUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    mfa_factors: z
      .lazy(() => mfa_factorsUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    one_time_tokens: z
      .lazy(() => one_time_tokensUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => sessionsUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    categories: z
      .lazy(() => categoriesUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    controller_admins: z
      .lazy(() => controller_adminsUpdateOneWithoutUsersNestedInputObjectSchema)
      .optional(),
    domain_owners: z
      .lazy(() => domain_ownersUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => ordersUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    products: z
      .lazy(() => productsUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
    profiles: z
      .lazy(() => profilesUpdateOneWithoutUsersNestedInputObjectSchema)
      .optional(),
    store_settings: z
      .lazy(() => store_settingsUpdateOneWithoutUsersNestedInputObjectSchema)
      .optional(),
    stores: z
      .lazy(() => storesUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const usersUpdateWithoutCustomersInputObjectSchema = Schema;
