import { z } from 'zod';
import { DomainWhereInputObjectSchema } from './DomainWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainRelationFilter> = z
  .object({
    is: z
      .lazy(() => DomainWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DomainWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DomainRelationFilterObjectSchema = Schema;
