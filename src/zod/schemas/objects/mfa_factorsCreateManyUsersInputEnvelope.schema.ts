import { z } from 'zod';
import { mfa_factorsCreateManyUsersInputObjectSchema } from './mfa_factorsCreateManyUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsCreateManyUsersInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => mfa_factorsCreateManyUsersInputObjectSchema),
      z.lazy(() => mfa_factorsCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const mfa_factorsCreateManyUsersInputEnvelopeObjectSchema = Schema;
