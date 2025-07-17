import { z } from 'zod';
import { customersCreateManyUsersInputObjectSchema } from './customersCreateManyUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersCreateManyUsersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => customersCreateManyUsersInputObjectSchema),
      z.lazy(() => customersCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const customersCreateManyUsersInputEnvelopeObjectSchema = Schema;
