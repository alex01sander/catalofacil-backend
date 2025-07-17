import { z } from 'zod';
import { sessionsWhereInputObjectSchema } from './sessionsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionsRelationFilter> = z
  .object({
    is: z
      .lazy(() => sessionsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => sessionsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SessionsRelationFilterObjectSchema = Schema;
