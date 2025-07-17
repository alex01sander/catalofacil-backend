import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Saml_providersListRelationFilterObjectSchema } from './Saml_providersListRelationFilter.schema';
import { Saml_relay_statesListRelationFilterObjectSchema } from './Saml_relay_statesListRelationFilter.schema';
import { Sso_domainsListRelationFilterObjectSchema } from './Sso_domainsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => sso_providersWhereInputObjectSchema),
        z.lazy(() => sso_providersWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => sso_providersWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => sso_providersWhereInputObjectSchema),
        z.lazy(() => sso_providersWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    resource_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    saml_providers: z
      .lazy(() => Saml_providersListRelationFilterObjectSchema)
      .optional(),
    saml_relay_states: z
      .lazy(() => Saml_relay_statesListRelationFilterObjectSchema)
      .optional(),
    sso_domains: z
      .lazy(() => Sso_domainsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const sso_providersWhereInputObjectSchema = Schema;
