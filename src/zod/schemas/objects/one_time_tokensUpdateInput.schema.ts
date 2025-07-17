import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { one_time_token_typeSchema } from '../enums/one_time_token_type.schema';
import { Enumone_time_token_typeFieldUpdateOperationsInputObjectSchema } from './Enumone_time_token_typeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { usersUpdateOneRequiredWithoutOne_time_tokensNestedInputObjectSchema } from './usersUpdateOneRequiredWithoutOne_time_tokensNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    token_type: z
      .union([
        z.lazy(() => one_time_token_typeSchema),
        z.lazy(
          () => Enumone_time_token_typeFieldUpdateOperationsInputObjectSchema,
        ),
      ])
      .optional(),
    token_hash: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    relates_to: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updated_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    users: z
      .lazy(
        () =>
          usersUpdateOneRequiredWithoutOne_time_tokensNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const one_time_tokensUpdateInputObjectSchema = Schema;
