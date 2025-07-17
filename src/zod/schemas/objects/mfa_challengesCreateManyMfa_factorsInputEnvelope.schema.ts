import { z } from 'zod';
import { mfa_challengesCreateManyMfa_factorsInputObjectSchema } from './mfa_challengesCreateManyMfa_factorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesCreateManyMfa_factorsInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => mfa_challengesCreateManyMfa_factorsInputObjectSchema),
        z
          .lazy(() => mfa_challengesCreateManyMfa_factorsInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const mfa_challengesCreateManyMfa_factorsInputEnvelopeObjectSchema =
  Schema;
