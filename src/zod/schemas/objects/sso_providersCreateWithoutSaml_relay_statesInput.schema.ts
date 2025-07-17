import { z } from 'zod';
import { saml_providersCreateNestedManyWithoutSso_providersInputObjectSchema } from './saml_providersCreateNestedManyWithoutSso_providersInput.schema';
import { sso_domainsCreateNestedManyWithoutSso_providersInputObjectSchema } from './sso_domainsCreateNestedManyWithoutSso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersCreateWithoutSaml_relay_statesInput> =
  z
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
      sso_domains: z
        .lazy(
          () =>
            sso_domainsCreateNestedManyWithoutSso_providersInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const sso_providersCreateWithoutSaml_relay_statesInputObjectSchema =
  Schema;
