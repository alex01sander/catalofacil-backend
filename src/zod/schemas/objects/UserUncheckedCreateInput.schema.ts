import { z } from 'zod';
import { DomainUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './DomainUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    password: z.string(),
    createdAt: z.coerce.date().optional(),
    domains: z
      .lazy(() => DomainUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
