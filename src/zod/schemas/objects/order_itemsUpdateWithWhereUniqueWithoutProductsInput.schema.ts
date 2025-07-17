import { z } from 'zod';
import { order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsUpdateWithoutProductsInputObjectSchema } from './order_itemsUpdateWithoutProductsInput.schema';
import { order_itemsUncheckedUpdateWithoutProductsInputObjectSchema } from './order_itemsUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsUpdateWithWhereUniqueWithoutProductsInput> =
  z
    .object({
      where: z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => order_itemsUpdateWithoutProductsInputObjectSchema),
        z.lazy(
          () => order_itemsUncheckedUpdateWithoutProductsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const order_itemsUpdateWithWhereUniqueWithoutProductsInputObjectSchema =
  Schema;
