import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesUncheckedCreateWithoutSso_providersInput> =
  z
    .object({
      id: z.string(),
      request_id: z.string(),
      for_email: z.string().optional().nullable(),
      redirect_to: z.string().optional().nullable(),
      created_at: z.coerce.date().optional().nullable(),
      updated_at: z.coerce.date().optional().nullable(),
      flow_state_id: z.string().optional().nullable(),
    })
    .strict();

export const saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema =
  Schema;
