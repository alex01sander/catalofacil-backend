import { z } from 'zod';
import { ordersCreateManyUsersInputObjectSchema } from './ordersCreateManyUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateManyUsersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ordersCreateManyUsersInputObjectSchema),
      z.lazy(() => ordersCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ordersCreateManyUsersInputEnvelopeObjectSchema = Schema;
