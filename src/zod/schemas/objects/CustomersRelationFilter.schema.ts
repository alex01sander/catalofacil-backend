import { z } from 'zod';
import { customersWhereInputObjectSchema } from './customersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomersRelationFilter> = z
  .object({
    is: z
      .lazy(() => customersWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => customersWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CustomersRelationFilterObjectSchema = Schema;
