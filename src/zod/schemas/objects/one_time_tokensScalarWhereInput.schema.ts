import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { Enumone_time_token_typeFilterObjectSchema } from './Enumone_time_token_typeFilter.schema';
import { one_time_token_typeSchema } from '../enums/one_time_token_type.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => one_time_tokensScalarWhereInputObjectSchema),
        z.lazy(() => one_time_tokensScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => one_time_tokensScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => one_time_tokensScalarWhereInputObjectSchema),
        z.lazy(() => one_time_tokensScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    token_type: z
      .union([
        z.lazy(() => Enumone_time_token_typeFilterObjectSchema),
        z.lazy(() => one_time_token_typeSchema),
      ])
      .optional(),
    token_hash: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    relates_to: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updated_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const one_time_tokensScalarWhereInputObjectSchema = Schema;
