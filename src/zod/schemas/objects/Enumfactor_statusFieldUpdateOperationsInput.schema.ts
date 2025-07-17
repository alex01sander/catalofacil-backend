import { z } from 'zod';
import { factor_statusSchema } from '../enums/factor_status.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Enumfactor_statusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => factor_statusSchema).optional(),
  })
  .strict();

export const Enumfactor_statusFieldUpdateOperationsInputObjectSchema = Schema;
