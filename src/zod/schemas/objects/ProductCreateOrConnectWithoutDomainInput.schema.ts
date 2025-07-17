import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutDomainInputObjectSchema } from './ProductCreateWithoutDomainInput.schema';
import { ProductUncheckedCreateWithoutDomainInputObjectSchema } from './ProductUncheckedCreateWithoutDomainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutDomainInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutDomainInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutDomainInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutDomainInputObjectSchema = Schema;
