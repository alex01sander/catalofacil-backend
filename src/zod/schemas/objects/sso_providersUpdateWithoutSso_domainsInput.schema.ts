import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { saml_providersUpdateManyWithoutSso_providersNestedInputObjectSchema } from './saml_providersUpdateManyWithoutSso_providersNestedInput.schema';
import { saml_relay_statesUpdateManyWithoutSso_providersNestedInputObjectSchema } from './saml_relay_statesUpdateManyWithoutSso_providersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersUpdateWithoutSso_domainsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    resource_id: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
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
    saml_providers: z
      .lazy(
        () =>
          saml_providersUpdateManyWithoutSso_providersNestedInputObjectSchema,
      )
      .optional(),
    saml_relay_states: z
      .lazy(
        () =>
          saml_relay_statesUpdateManyWithoutSso_providersNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const sso_providersUpdateWithoutSso_domainsInputObjectSchema = Schema;
