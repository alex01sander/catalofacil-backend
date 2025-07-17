import { z } from 'zod';
import { saml_providersUncheckedCreateNestedManyWithoutSso_providersInputObjectSchema } from './saml_providersUncheckedCreateNestedManyWithoutSso_providersInput.schema';
import { saml_relay_statesUncheckedCreateNestedManyWithoutSso_providersInputObjectSchema } from './saml_relay_statesUncheckedCreateNestedManyWithoutSso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersUncheckedCreateWithoutSso_domainsInput> =
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
      saml_relay_states: z
        .lazy(
          () =>
            saml_relay_statesUncheckedCreateNestedManyWithoutSso_providersInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema =
  Schema;
