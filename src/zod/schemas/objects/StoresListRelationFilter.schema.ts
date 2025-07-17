import { z } from 'zod';
import { storesWhereInputObjectSchema } from './storesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoresListRelationFilter> = z
  .object({
    every: z.lazy(() => storesWhereInputObjectSchema).optional(),
    some: z.lazy(() => storesWhereInputObjectSchema).optional(),
    none: z.lazy(() => storesWhereInputObjectSchema).optional(),
  })
  .strict();

export const StoresListRelationFilterObjectSchema = Schema;
