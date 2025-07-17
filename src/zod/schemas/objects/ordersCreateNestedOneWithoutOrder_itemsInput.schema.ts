import { z } from 'zod';
import { ordersCreateWithoutOrder_itemsInputObjectSchema } from './ordersCreateWithoutOrder_itemsInput.schema';
import { ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_itemsInput.schema';
import { ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema } from './ordersCreateOrConnectWithoutOrder_itemsInput.schema';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateNestedOneWithoutOrder_itemsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ordersCreateWithoutOrder_itemsInputObjectSchema),
        z.lazy(() => ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ordersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ordersCreateNestedOneWithoutOrder_itemsInputObjectSchema = Schema;
