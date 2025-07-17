import { z } from 'zod';
import { UserCreateNestedOneWithoutDomainsInputObjectSchema } from './UserCreateNestedOneWithoutDomainsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainCreateWithoutProductsInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    createdAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutDomainsInputObjectSchema),
  })
  .strict();

export const DomainCreateWithoutProductsInputObjectSchema = Schema;
