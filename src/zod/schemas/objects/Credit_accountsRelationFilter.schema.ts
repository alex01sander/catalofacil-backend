import { z } from 'zod';
import { credit_accountsWhereInputObjectSchema } from './credit_accountsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Credit_accountsRelationFilter> = z
  .object({
    is: z
      .lazy(() => credit_accountsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => credit_accountsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const Credit_accountsRelationFilterObjectSchema = Schema;
