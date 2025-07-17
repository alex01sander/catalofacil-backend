import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutDomainInputObjectSchema } from './ProductUpdateWithoutDomainInput.schema';
import { ProductUncheckedUpdateWithoutDomainInputObjectSchema } from './ProductUncheckedUpdateWithoutDomainInput.schema';
import { ProductCreateWithoutDomainInputObjectSchema } from './ProductCreateWithoutDomainInput.schema';
import { ProductUncheckedCreateWithoutDomainInputObjectSchema } from './ProductUncheckedCreateWithoutDomainInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutDomainInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductUpdateWithoutDomainInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutDomainInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductCreateWithoutDomainInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutDomainInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpsertWithWhereUniqueWithoutDomainInputObjectSchema =
  Schema;
