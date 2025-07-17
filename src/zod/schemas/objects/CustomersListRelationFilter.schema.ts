import { z } from 'zod';
import { customersWhereInputObjectSchema } from './customersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomersListRelationFilter> = z
  .object({
    every: z.lazy(() => customersWhereInputObjectSchema).optional(),
    some: z.lazy(() => customersWhereInputObjectSchema).optional(),
    none: z.lazy(() => customersWhereInputObjectSchema).optional(),
  })
  .strict();

export const CustomersListRelationFilterObjectSchema = Schema;
