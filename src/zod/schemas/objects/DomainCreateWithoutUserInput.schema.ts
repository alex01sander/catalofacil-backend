import { z } from 'zod';
import { ProductCreateNestedManyWithoutDomainInputObjectSchema } from './ProductCreateNestedManyWithoutDomainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    createdAt: z.coerce.date().optional(),
    products: z
      .lazy(() => ProductCreateNestedManyWithoutDomainInputObjectSchema)
      .optional(),
  })
  .strict();

export const DomainCreateWithoutUserInputObjectSchema = Schema;
