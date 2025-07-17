import { z } from 'zod';
import { credit_transactionsWhereInputObjectSchema } from './credit_transactionsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Credit_transactionsListRelationFilter> = z
  .object({
    every: z.lazy(() => credit_transactionsWhereInputObjectSchema).optional(),
    some: z.lazy(() => credit_transactionsWhereInputObjectSchema).optional(),
    none: z.lazy(() => credit_transactionsWhereInputObjectSchema).optional(),
  })
  .strict();

export const Credit_transactionsListRelationFilterObjectSchema = Schema;
