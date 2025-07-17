import { z } from 'zod';
import { sso_domainsWhereInputObjectSchema } from './sso_domainsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Sso_domainsListRelationFilter> = z
  .object({
    every: z.lazy(() => sso_domainsWhereInputObjectSchema).optional(),
    some: z.lazy(() => sso_domainsWhereInputObjectSchema).optional(),
    none: z.lazy(() => sso_domainsWhereInputObjectSchema).optional(),
  })
  .strict();

export const Sso_domainsListRelationFilterObjectSchema = Schema;
