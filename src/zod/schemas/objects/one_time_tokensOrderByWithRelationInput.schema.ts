import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    token_type: z.lazy(() => SortOrderSchema).optional(),
    token_hash: z.lazy(() => SortOrderSchema).optional(),
    relates_to: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const one_time_tokensOrderByWithRelationInputObjectSchema = Schema;
