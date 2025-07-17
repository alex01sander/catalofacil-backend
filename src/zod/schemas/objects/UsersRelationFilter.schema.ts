import { z } from 'zod';
import { usersWhereInputObjectSchema } from './usersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsersRelationFilter> = z
  .object({
    is: z
      .lazy(() => usersWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => usersWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const UsersRelationFilterObjectSchema = Schema;
