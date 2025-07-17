import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutDomainInputObjectSchema } from './ProductUpdateWithoutDomainInput.schema';
import { ProductUncheckedUpdateWithoutDomainInputObjectSchema } from './ProductUncheckedUpdateWithoutDomainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutDomainInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductUpdateWithoutDomainInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutDomainInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpdateWithWhereUniqueWithoutDomainInputObjectSchema =
  Schema;
