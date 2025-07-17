import { z } from 'zod';
import { UserCreateNestedOneWithoutDomainsInputObjectSchema } from './UserCreateNestedOneWithoutDomainsInput.schema';
import { ProductCreateNestedManyWithoutDomainInputObjectSchema } from './ProductCreateNestedManyWithoutDomainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainCreateInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    createdAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutDomainsInputObjectSchema),
    products: z
      .lazy(() => ProductCreateNestedManyWithoutDomainInputObjectSchema)
      .optional(),
  })
  .strict();

export const DomainCreateInputObjectSchema = Schema;
