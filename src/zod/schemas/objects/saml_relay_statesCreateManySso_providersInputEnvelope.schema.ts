import { z } from 'zod';
import { saml_relay_statesCreateManySso_providersInputObjectSchema } from './saml_relay_statesCreateManySso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesCreateManySso_providersInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => saml_relay_statesCreateManySso_providersInputObjectSchema),
        z
          .lazy(() => saml_relay_statesCreateManySso_providersInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const saml_relay_statesCreateManySso_providersInputEnvelopeObjectSchema =
  Schema;
