import { z } from 'zod';
import { domain_ownersCreateManyUsersInputObjectSchema } from './domain_ownersCreateManyUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersCreateManyUsersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => domain_ownersCreateManyUsersInputObjectSchema),
      z.lazy(() => domain_ownersCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const domain_ownersCreateManyUsersInputEnvelopeObjectSchema = Schema;
