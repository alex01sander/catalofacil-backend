import { z } from 'zod';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsCreateWithoutStoresInputObjectSchema } from './productsCreateWithoutStoresInput.schema';
import { productsUncheckedCreateWithoutStoresInputObjectSchema } from './productsUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateOrConnectWithoutStoresInput> = z
  .object({
    where: z.lazy(() => productsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => productsCreateWithoutStoresInputObjectSchema),
      z.lazy(() => productsUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
  })
  .strict();

export const productsCreateOrConnectWithoutStoresInputObjectSchema = Schema;
