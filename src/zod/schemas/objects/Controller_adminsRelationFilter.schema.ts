import { z } from 'zod';
import { controller_adminsWhereInputObjectSchema } from './controller_adminsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Controller_adminsRelationFilter> = z
  .object({
    is: z
      .lazy(() => controller_adminsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => controller_adminsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const Controller_adminsRelationFilterObjectSchema = Schema;
