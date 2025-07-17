import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { one_time_token_typeSchema } from '../enums/one_time_token_type.schema';
import { Enumone_time_token_typeFieldUpdateOperationsInputObjectSchema } from './Enumone_time_token_typeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensUpdateManyMutationInput> = z
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
  })
  .strict();

export const one_time_tokensUpdateManyMutationInputObjectSchema = Schema;
