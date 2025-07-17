import { z } from 'zod';
import { sessionsWhereInputObjectSchema } from './sessionsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsListRelationFilter> = z
  .object({
    every: z.lazy(() => sessionsWhereInputObjectSchema).optional(),
    some: z.lazy(() => sessionsWhereInputObjectSchema).optional(),
    none: z.lazy(() => sessionsWhereInputObjectSchema).optional(),
  })
  .strict();

export const SessionsListRelationFilterObjectSchema = Schema;
