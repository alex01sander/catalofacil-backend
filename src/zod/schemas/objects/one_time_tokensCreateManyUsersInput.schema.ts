import { z } from 'zod';
import { one_time_token_typeSchema } from '../enums/one_time_token_type.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensCreateManyUsersInput> = z
  .object({
    id: z.string(),
    token_type: z.lazy(() => one_time_token_typeSchema),
    token_hash: z.string(),
    relates_to: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
  })
  .strict();

export const one_time_tokensCreateManyUsersInputObjectSchema = Schema;
