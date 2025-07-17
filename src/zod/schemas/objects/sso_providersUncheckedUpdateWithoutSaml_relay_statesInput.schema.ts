import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { saml_providersUncheckedUpdateManyWithoutSso_providersNestedInputObjectSchema } from './saml_providersUncheckedUpdateManyWithoutSso_providersNestedInput.schema';
import { sso_domainsUncheckedUpdateManyWithoutSso_providersNestedInputObjectSchema } from './sso_domainsUncheckedUpdateManyWithoutSso_providersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersUncheckedUpdateWithoutSaml_relay_statesInput> =
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
      saml_providers: z
        .lazy(
          () =>
            saml_providersUncheckedUpdateManyWithoutSso_providersNestedInputObjectSchema,
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

export const sso_providersUncheckedUpdateWithoutSaml_relay_statesInputObjectSchema =
  Schema;
