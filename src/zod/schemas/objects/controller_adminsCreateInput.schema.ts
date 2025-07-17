import { z } from 'zod';
import { usersCreateNestedOneWithoutController_adminsInputObjectSchema } from './usersCreateNestedOneWithoutController_adminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    created_at: z.coerce.date().optional(),
    updated_at: z.coerce.date().optional(),
    users: z.lazy(
      () => usersCreateNestedOneWithoutController_adminsInputObjectSchema,
    ),
  })
  .strict();

export const controller_adminsCreateInputObjectSchema = Schema;
