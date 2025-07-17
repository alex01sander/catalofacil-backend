import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { saml_relay_statesUncheckedUpdateManyWithoutSso_providersNestedInputObjectSchema } from './saml_relay_statesUncheckedUpdateManyWithoutSso_providersNestedInput.schema';
import { sso_domainsUncheckedUpdateManyWithoutSso_providersNestedInputObjectSchema } from './sso_domainsUncheckedUpdateManyWithoutSso_providersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersUncheckedUpdateWithoutSaml_providersInput> =
  z
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
      saml_relay_states: z
        .lazy(
          () =>
            saml_relay_statesUncheckedUpdateManyWithoutSso_providersNestedInputObjectSchema,
        )
        .optional(),
      sso_domains: z
        .lazy(
          () =>
            sso_domainsUncheckedUpdateManyWithoutSso_providersNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const sso_providersUncheckedUpdateWithoutSaml_providersInputObjectSchema =
  Schema;
