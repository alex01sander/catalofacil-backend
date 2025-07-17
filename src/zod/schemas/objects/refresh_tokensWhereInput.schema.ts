import { z } from 'zod';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { SessionsRelationFilterObjectSchema } from './SessionsRelationFilter.schema';
import { sessionsWhereInputObjectSchema } from './sessionsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => refresh_tokensWhereInputObjectSchema),
        z.lazy(() => refresh_tokensWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => refresh_tokensWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => refresh_tokensWhereInputObjectSchema),
        z.lazy(() => refresh_tokensWhereInputObjectSchema).array(),
      ])
      .optional(),
    instance_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    id: z
      .union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()])
      .optional(),
    token: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    user_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    revoked: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
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
    parent: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    session_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    sessions: z
      .union([
        z.lazy(() => SessionsRelationFilterObjectSchema),
        z.lazy(() => sessionsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const refresh_tokensWhereInputObjectSchema = Schema;
