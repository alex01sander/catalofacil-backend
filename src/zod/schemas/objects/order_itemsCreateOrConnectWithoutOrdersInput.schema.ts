import { z } from 'zod';
import { order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsCreateWithoutOrdersInputObjectSchema } from './order_itemsCreateWithoutOrdersInput.schema';
import { order_itemsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsCreateOrConnectWithoutOrdersInput> = z
  .object({
    where: z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => order_itemsCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => order_itemsUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const order_itemsCreateOrConnectWithoutOrdersInputObjectSchema = Schema;
