import { z } from 'zod';
import { DomainCreateManyUserInputObjectSchema } from './DomainCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DomainCreateManyUserInputObjectSchema),
      z.lazy(() => DomainCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const DomainCreateManyUserInputEnvelopeObjectSchema = Schema;
