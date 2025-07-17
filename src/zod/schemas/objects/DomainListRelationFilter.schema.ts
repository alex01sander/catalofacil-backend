import { z } from 'zod';
import { DomainWhereInputObjectSchema } from './DomainWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainListRelationFilter> = z
  .object({
    every: z.lazy(() => DomainWhereInputObjectSchema).optional(),
    some: z.lazy(() => DomainWhereInputObjectSchema).optional(),
    none: z.lazy(() => DomainWhereInputObjectSchema).optional(),
  })
  .strict();

export const DomainListRelationFilterObjectSchema = Schema;
