import { z } from 'zod';
import { storesWhereInputObjectSchema } from './storesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoresRelationFilter> = z
  .object({
    is: z
      .lazy(() => storesWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => storesWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const StoresRelationFilterObjectSchema = Schema;
