import { z } from 'zod';
import { flow_stateWhereInputObjectSchema } from './flow_stateWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Flow_stateRelationFilter> = z
  .object({
    is: z
      .lazy(() => flow_stateWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => flow_stateWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const Flow_stateRelationFilterObjectSchema = Schema;
