import { z } from 'zod';
import { saml_providersCreateManySso_providersInputObjectSchema } from './saml_providersCreateManySso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersCreateManySso_providersInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => saml_providersCreateManySso_providersInputObjectSchema),
        z
          .lazy(() => saml_providersCreateManySso_providersInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const saml_providersCreateManySso_providersInputEnvelopeObjectSchema =
  Schema;
