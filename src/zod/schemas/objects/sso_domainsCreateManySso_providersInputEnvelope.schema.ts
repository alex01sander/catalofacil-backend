import { z } from 'zod';
import { sso_domainsCreateManySso_providersInputObjectSchema } from './sso_domainsCreateManySso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsCreateManySso_providersInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => sso_domainsCreateManySso_providersInputObjectSchema),
        z
          .lazy(() => sso_domainsCreateManySso_providersInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const sso_domainsCreateManySso_providersInputEnvelopeObjectSchema =
  Schema;
