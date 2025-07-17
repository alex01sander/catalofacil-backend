import { z } from 'zod';
import { productsUpdateWithoutOrder_itemsInputObjectSchema } from './productsUpdateWithoutOrder_itemsInput.schema';
import { productsUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './productsUncheckedUpdateWithoutOrder_itemsInput.schema';
import { productsCreateWithoutOrder_itemsInputObjectSchema } from './productsCreateWithoutOrder_itemsInput.schema';
import { productsUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './productsUncheckedCreateWithoutOrder_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpsertWithoutOrder_itemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => productsUpdateWithoutOrder_itemsInputObjectSchema),
      z.lazy(() => productsUncheckedUpdateWithoutOrder_itemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => productsCreateWithoutOrder_itemsInputObjectSchema),
      z.lazy(() => productsUncheckedCreateWithoutOrder_itemsInputObjectSchema),
    ]),
  })
  .strict();

export const productsUpsertWithoutOrder_itemsInputObjectSchema = Schema;
