import { z } from 'zod';
import { code_challenge_methodSchema } from '../enums/code_challenge_method.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumcode_challenge_methodFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => code_challenge_methodSchema).optional(),
    })
    .strict();

export const Enumcode_challenge_methodFieldUpdateOperationsInputObjectSchema =
  Schema;
