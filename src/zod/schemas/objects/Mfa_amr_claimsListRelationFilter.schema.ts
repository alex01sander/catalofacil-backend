import { z } from 'zod';
import { mfa_amr_claimsWhereInputObjectSchema } from './mfa_amr_claimsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Mfa_amr_claimsListRelationFilter> = z
  .object({
    every: z.lazy(() => mfa_amr_claimsWhereInputObjectSchema).optional(),
    some: z.lazy(() => mfa_amr_claimsWhereInputObjectSchema).optional(),
    none: z.lazy(() => mfa_amr_claimsWhereInputObjectSchema).optional(),
  })
  .strict();

export const Mfa_amr_claimsListRelationFilterObjectSchema = Schema;
