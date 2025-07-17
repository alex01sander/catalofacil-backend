import { z } from 'zod';
import { one_time_token_typeSchema } from '../enums/one_time_token_type.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumone_time_token_typeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => one_time_token_typeSchema).optional(),
    })
    .strict();

export const Enumone_time_token_typeFieldUpdateOperationsInputObjectSchema =
  Schema;
