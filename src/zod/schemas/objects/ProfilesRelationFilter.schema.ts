import { z } from 'zod';
import { profilesWhereInputObjectSchema } from './profilesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfilesRelationFilter> = z
  .object({
    is: z
      .lazy(() => profilesWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => profilesWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProfilesRelationFilterObjectSchema = Schema;
