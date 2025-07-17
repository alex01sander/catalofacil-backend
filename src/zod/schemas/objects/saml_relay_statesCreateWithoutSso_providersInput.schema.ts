import { z } from 'zod';
import { flow_stateCreateNestedOneWithoutSaml_relay_statesInputObjectSchema } from './flow_stateCreateNestedOneWithoutSaml_relay_statesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesCreateWithoutSso_providersInput> =
  z
    .object({
      id: z.string(),
      request_id: z.string(),
      for_email: z.string().optional().nullable(),
      redirect_to: z.string().optional().nullable(),
      created_at: z.coerce.date().optional().nullable(),
      updated_at: z.coerce.date().optional().nullable(),
      flow_state: z
        .lazy(
          () =>
            flow_stateCreateNestedOneWithoutSaml_relay_statesInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const saml_relay_statesCreateWithoutSso_providersInputObjectSchema =
  Schema;
