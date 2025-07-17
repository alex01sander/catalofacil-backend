import { z } from 'zod';
import { store_settingsWhereInputObjectSchema } from './store_settingsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Store_settingsRelationFilter> = z
  .object({
    is: z
      .lazy(() => store_settingsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => store_settingsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const Store_settingsRelationFilterObjectSchema = Schema;
