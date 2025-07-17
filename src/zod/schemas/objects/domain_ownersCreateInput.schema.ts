import { z } from 'zod';
import { usersCreateNestedOneWithoutDomain_ownersInputObjectSchema } from './usersCreateNestedOneWithoutDomain_ownersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersCreateInput> = z
  .object({
    id: z.string().optional(),
    domain: z.string(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    domain_type: z.string().optional(),
    users: z.lazy(
      () => usersCreateNestedOneWithoutDomain_ownersInputObjectSchema,
    ),
  })
  .strict();

export const domain_ownersCreateInputObjectSchema = Schema;
