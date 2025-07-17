import { z } from 'zod';
import { saml_providersUncheckedCreateNestedManyWithoutSso_providersInputObjectSchema } from './saml_providersUncheckedCreateNestedManyWithoutSso_providersInput.schema';
import { sso_domainsUncheckedCreateNestedManyWithoutSso_providersInputObjectSchema } from './sso_domainsUncheckedCreateNestedManyWithoutSso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersUncheckedCreateWithoutSaml_relay_statesInput> =
  z
    .object({
      id: z.string(),
      resource_id: z.string().optional().nullable(),
      created_at: z.coerce.date().optional().nullable(),
      updated_at: z.coerce.date().optional().nullable(),
      saml_providers: z
        .lazy(
          () =>
            saml_providersUncheckedCreateNestedManyWithoutSso_providersInputObjectSchema,
        )
        .optional(),
      sso_domains: z
        .lazy(
          () =>
            sso_domainsUncheckedCreateNestedManyWithoutSso_providersInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const sso_providersUncheckedCreateWithoutSaml_relay_statesInputObjectSchema =
  Schema;
