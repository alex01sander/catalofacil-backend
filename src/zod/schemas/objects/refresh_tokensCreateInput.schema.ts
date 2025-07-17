import { z } from 'zod';
import { sessionsCreateNestedOneWithoutRefresh_tokensInputObjectSchema } from './sessionsCreateNestedOneWithoutRefresh_tokensInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensCreateInput> = z
  .object({
    instance_id: z.string().optional().nullable(),
    id: z.bigint().optional(),
    token: z.string().optional().nullable(),
    user_id: z.string().optional().nullable(),
    revoked: z.boolean().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    parent: z.string().optional().nullable(),
    sessions: z
      .lazy(() => sessionsCreateNestedOneWithoutRefresh_tokensInputObjectSchema)
      .optional(),
  })
  .strict();

export const refresh_tokensCreateInputObjectSchema = Schema;
