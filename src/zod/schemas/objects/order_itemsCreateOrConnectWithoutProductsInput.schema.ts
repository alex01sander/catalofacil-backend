import { z } from 'zod';
import { order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsCreateWithoutProductsInputObjectSchema } from './order_itemsCreateWithoutProductsInput.schema';
import { order_itemsUncheckedCreateWithoutProductsInputObjectSchema } from './order_itemsUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsCreateOrConnectWithoutProductsInput> =
  z
    .object({
      where: z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => order_itemsCreateWithoutProductsInputObjectSchema),
        z.lazy(
          () => order_itemsUncheckedCreateWithoutProductsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const order_itemsCreateOrConnectWithoutProductsInputObjectSchema =
  Schema;
