import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => sso_domainsScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => sso_domainsScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => sso_domainsScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => sso_domainsScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => sso_domainsScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    sso_provider_id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    domain: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const sso_domainsScalarWhereWithAggregatesInputObjectSchema = Schema;
