import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutDomainInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutDomainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    slug: z.string(),
    userId: z.string(),
    createdAt: z.coerce.date().optional(),
    products: z
      .lazy(
        () => ProductUncheckedCreateNestedManyWithoutDomainInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const DomainUncheckedCreateInputObjectSchema = Schema;
