import { z } from 'zod';
import { sessionsCreateManyUsersInputObjectSchema } from './sessionsCreateManyUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsCreateManyUsersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => sessionsCreateManyUsersInputObjectSchema),
      z.lazy(() => sessionsCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const sessionsCreateManyUsersInputEnvelopeObjectSchema = Schema;
