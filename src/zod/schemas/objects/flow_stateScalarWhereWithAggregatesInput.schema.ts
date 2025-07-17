import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { UuidNullableWithAggregatesFilterObjectSchema } from './UuidNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { Enumcode_challenge_methodWithAggregatesFilterObjectSchema } from './Enumcode_challenge_methodWithAggregatesFilter.schema';
import { code_challenge_methodSchema } from '../enums/code_challenge_method.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.flow_stateScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => flow_stateScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => flow_stateScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => flow_stateScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => flow_stateScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => flow_stateScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([
        z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    auth_code: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    code_challenge_method: z
      .union([
        z.lazy(() => Enumcode_challenge_methodWithAggregatesFilterObjectSchema),
        z.lazy(() => code_challenge_methodSchema),
      ])
      .optional(),
    code_challenge: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    provider_type: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    provider_access_token: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    provider_refresh_token: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
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
    authentication_method: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    auth_code_issued_at: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const flow_stateScalarWhereWithAggregatesInputObjectSchema = Schema;
