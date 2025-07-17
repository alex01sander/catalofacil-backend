import { z } from 'zod';
import { saml_relay_statesCreateManyFlow_stateInputObjectSchema } from './saml_relay_statesCreateManyFlow_stateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesCreateManyFlow_stateInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => saml_relay_statesCreateManyFlow_stateInputObjectSchema),
        z
          .lazy(() => saml_relay_statesCreateManyFlow_stateInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const saml_relay_statesCreateManyFlow_stateInputEnvelopeObjectSchema =
  Schema;
