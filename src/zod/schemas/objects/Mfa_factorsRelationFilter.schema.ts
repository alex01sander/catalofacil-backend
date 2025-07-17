import { z } from 'zod';
import { mfa_factorsWhereInputObjectSchema } from './mfa_factorsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Mfa_factorsRelationFilter> = z
  .object({
    is: z
      .lazy(() => mfa_factorsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => mfa_factorsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const Mfa_factorsRelationFilterObjectSchema = Schema;
