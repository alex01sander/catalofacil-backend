import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const controller_adminsOrderByWithRelationInputObjectSchema = Schema;
