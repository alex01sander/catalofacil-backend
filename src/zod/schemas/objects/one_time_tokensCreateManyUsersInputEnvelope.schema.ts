import { z } from 'zod';
import { one_time_tokensCreateManyUsersInputObjectSchema } from './one_time_tokensCreateManyUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensCreateManyUsersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => one_time_tokensCreateManyUsersInputObjectSchema),
      z.lazy(() => one_time_tokensCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const one_time_tokensCreateManyUsersInputEnvelopeObjectSchema = Schema;
