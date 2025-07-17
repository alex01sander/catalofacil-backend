import { z } from 'zod';
import { identitiesCreateManyUsersInputObjectSchema } from './identitiesCreateManyUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesCreateManyUsersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => identitiesCreateManyUsersInputObjectSchema),
      z.lazy(() => identitiesCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const identitiesCreateManyUsersInputEnvelopeObjectSchema = Schema;
