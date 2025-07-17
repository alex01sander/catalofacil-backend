import { z } from 'zod';
import { storesCreateManyUsersInputObjectSchema } from './storesCreateManyUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateManyUsersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => storesCreateManyUsersInputObjectSchema),
      z.lazy(() => storesCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const storesCreateManyUsersInputEnvelopeObjectSchema = Schema;
