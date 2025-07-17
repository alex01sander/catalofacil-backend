import { z } from 'zod';
import { ordersUpdateWithoutOrder_itemsInputObjectSchema } from './ordersUpdateWithoutOrder_itemsInput.schema';
import { ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedUpdateWithoutOrder_itemsInput.schema';
import { ordersCreateWithoutOrder_itemsInputObjectSchema } from './ordersCreateWithoutOrder_itemsInput.schema';
import { ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpsertWithoutOrder_itemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ordersUpdateWithoutOrder_itemsInputObjectSchema),
      z.lazy(() => ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ordersCreateWithoutOrder_itemsInputObjectSchema),
      z.lazy(() => ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema),
    ]),
  })
  .strict();

export const ordersUpsertWithoutOrder_itemsInputObjectSchema = Schema;
