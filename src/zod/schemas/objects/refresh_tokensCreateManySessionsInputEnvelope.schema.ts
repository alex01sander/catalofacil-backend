import { z } from 'zod';
import { refresh_tokensCreateManySessionsInputObjectSchema } from './refresh_tokensCreateManySessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensCreateManySessionsInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => refresh_tokensCreateManySessionsInputObjectSchema),
        z.lazy(() => refresh_tokensCreateManySessionsInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const refresh_tokensCreateManySessionsInputEnvelopeObjectSchema = Schema;
