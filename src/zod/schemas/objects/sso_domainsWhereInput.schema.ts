import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Sso_providersRelationFilterObjectSchema } from './Sso_providersRelationFilter.schema';
import { sso_providersWhereInputObjectSchema } from './sso_providersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => sso_domainsWhereInputObjectSchema),
        z.lazy(() => sso_domainsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => sso_domainsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => sso_domainsWhereInputObjectSchema),
        z.lazy(() => sso_domainsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    sso_provider_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    domain: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
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
    sso_providers: z
      .union([
        z.lazy(() => Sso_providersRelationFilterObjectSchema),
        z.lazy(() => sso_providersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const sso_domainsWhereInputObjectSchema = Schema;
