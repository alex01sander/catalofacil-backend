import { z } from 'zod';
import { flow_stateCreateNestedOneWithoutSaml_relay_statesInputObjectSchema } from './flow_stateCreateNestedOneWithoutSaml_relay_statesInput.schema';
import { sso_providersCreateNestedOneWithoutSaml_relay_statesInputObjectSchema } from './sso_providersCreateNestedOneWithoutSaml_relay_statesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesCreateInput> = z
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
    sso_providers: z.lazy(
      () =>
        sso_providersCreateNestedOneWithoutSaml_relay_statesInputObjectSchema,
    ),
  })
  .strict();

export const saml_relay_statesCreateInputObjectSchema = Schema;
