import { z } from 'zod';
import { factor_typeSchema } from '../enums/factor_type.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumfactor_typeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => factor_typeSchema).optional(),
  })
  .strict();

export const Enumfactor_typeFieldUpdateOperationsInputObjectSchema = Schema;
