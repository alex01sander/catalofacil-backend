import { z } from 'zod';
import { usersCreateNestedOneWithoutProfilesInputObjectSchema } from './usersCreateNestedOneWithoutProfilesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.profilesCreateInput> = z
  .object({
    email: z.string(),
    full_name: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    users: z.lazy(() => usersCreateNestedOneWithoutProfilesInputObjectSchema),
  })
  .strict();

export const profilesCreateInputObjectSchema = Schema;
