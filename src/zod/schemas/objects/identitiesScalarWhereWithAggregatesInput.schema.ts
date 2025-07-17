import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => identitiesScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => identitiesScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => identitiesScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => identitiesScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => identitiesScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    provider_id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    identity_data: z
      .lazy(() => JsonWithAggregatesFilterObjectSchema)
      .optional(),
    provider: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    last_sign_in_at: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
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
    email: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const identitiesScalarWhereWithAggregatesInputObjectSchema = Schema;
