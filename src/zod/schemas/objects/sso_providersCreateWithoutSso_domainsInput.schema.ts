import { z } from 'zod';
import { saml_providersCreateNestedManyWithoutSso_providersInputObjectSchema } from './saml_providersCreateNestedManyWithoutSso_providersInput.schema';
import { saml_relay_statesCreateNestedManyWithoutSso_providersInputObjectSchema } from './saml_relay_statesCreateNestedManyWithoutSso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersCreateWithoutSso_domainsInput> = z
  .object({
    id: z.string(),
    resource_id: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    saml_providers: z
      .lazy(
        () =>
          saml_providersCreateNestedManyWithoutSso_providersInputObjectSchema,
      )
      .optional(),
    saml_relay_states: z
      .lazy(
        () =>
          saml_relay_statesCreateNestedManyWithoutSso_providersInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const sso_providersCreateWithoutSso_domainsInputObjectSchema = Schema;
