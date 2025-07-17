import { z } from 'zod';
import { sso_providersCreateNestedOneWithoutSso_domainsInputObjectSchema } from './sso_providersCreateNestedOneWithoutSso_domainsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsCreateInput> = z
  .object({
    id: z.string(),
    domain: z.string(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    sso_providers: z.lazy(
      () => sso_providersCreateNestedOneWithoutSso_domainsInputObjectSchema,
    ),
  })
  .strict();

export const sso_domainsCreateInputObjectSchema = Schema;
