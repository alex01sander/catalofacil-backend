import { z } from 'zod';
import { categoriesCreateManyUsersInputObjectSchema } from './categoriesCreateManyUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateManyUsersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => categoriesCreateManyUsersInputObjectSchema),
      z.lazy(() => categoriesCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const categoriesCreateManyUsersInputEnvelopeObjectSchema = Schema;
