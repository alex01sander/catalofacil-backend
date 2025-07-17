import { z } from 'zod';
import { DomainCreateNestedManyWithoutUserInputObjectSchema } from './DomainCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    password: z.string(),
    createdAt: z.coerce.date().optional(),
    domains: z
      .lazy(() => DomainCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
