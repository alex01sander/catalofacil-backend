import { z } from 'zod';
import { identitiesWhereInputObjectSchema } from './identitiesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IdentitiesListRelationFilter> = z
  .object({
    every: z.lazy(() => identitiesWhereInputObjectSchema).optional(),
    some: z.lazy(() => identitiesWhereInputObjectSchema).optional(),
    none: z.lazy(() => identitiesWhereInputObjectSchema).optional(),
  })
  .strict();

export const IdentitiesListRelationFilterObjectSchema = Schema;
