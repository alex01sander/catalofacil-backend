import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { sessionsOrderByWithRelationInputObjectSchema } from './sessionsOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsOrderByWithRelationInput> = z
  .object({
    session_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    authentication_method: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    sessions: z
      .lazy(() => sessionsOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const mfa_amr_claimsOrderByWithRelationInputObjectSchema = Schema;
