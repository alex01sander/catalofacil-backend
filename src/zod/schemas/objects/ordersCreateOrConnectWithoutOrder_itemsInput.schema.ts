import { z } from 'zod';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersCreateWithoutOrder_itemsInputObjectSchema } from './ordersCreateWithoutOrder_itemsInput.schema';
import { ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateOrConnectWithoutOrder_itemsInput> = z
  .object({
    where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ordersCreateWithoutOrder_itemsInputObjectSchema),
      z.lazy(() => ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema),
    ]),
  })
  .strict();

export const ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema = Schema;
