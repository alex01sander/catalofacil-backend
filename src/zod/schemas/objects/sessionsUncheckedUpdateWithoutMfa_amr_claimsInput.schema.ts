import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { aal_levelSchema } from '../enums/aal_level.schema';
import { NullableEnumaal_levelFieldUpdateOperationsInputObjectSchema } from './NullableEnumaal_levelFieldUpdateOperationsInput.schema';
import { refresh_tokensUncheckedUpdateManyWithoutSessionsNestedInputObjectSchema } from './refresh_tokensUncheckedUpdateManyWithoutSessionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsUncheckedUpdateWithoutMfa_amr_claimsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
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
      factor_id: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      aal: z
        .union([
          z.lazy(() => aal_levelSchema),
          z.lazy(
            () => NullableEnumaal_levelFieldUpdateOperationsInputObjectSchema,
          ),
        ])
        .optional()
        .nullable(),
      not_after: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      refreshed_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      user_agent: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      ip: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      tag: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      refresh_tokens: z
        .lazy(
          () =>
            refresh_tokensUncheckedUpdateManyWithoutSessionsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const sessionsUncheckedUpdateWithoutMfa_amr_claimsInputObjectSchema =
  Schema;
