import { z } from 'zod';
import { domain_ownersWhereInputObjectSchema } from './domain_ownersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Domain_ownersListRelationFilter> = z
  .object({
    every: z.lazy(() => domain_ownersWhereInputObjectSchema).optional(),
    some: z.lazy(() => domain_ownersWhereInputObjectSchema).optional(),
    none: z.lazy(() => domain_ownersWhereInputObjectSchema).optional(),
  })
  .strict();

export const Domain_ownersListRelationFilterObjectSchema = Schema;
