import { z } from 'zod';
import { sso_providersWhereInputObjectSchema } from './sso_providersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Sso_providersRelationFilter> = z
  .object({
    is: z
      .lazy(() => sso_providersWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => sso_providersWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const Sso_providersRelationFilterObjectSchema = Schema;
