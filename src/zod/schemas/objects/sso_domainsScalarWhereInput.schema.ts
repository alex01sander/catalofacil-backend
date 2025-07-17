import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => sso_domainsScalarWhereInputObjectSchema),
        z.lazy(() => sso_domainsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => sso_domainsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => sso_domainsScalarWhereInputObjectSchema),
        z.lazy(() => sso_domainsScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const sso_domainsScalarWhereInputObjectSchema = Schema;
