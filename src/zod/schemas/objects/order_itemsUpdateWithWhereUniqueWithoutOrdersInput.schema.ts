import { z } from 'zod';
import { order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsUpdateWithoutOrdersInputObjectSchema } from './order_itemsUpdateWithoutOrdersInput.schema';
import { order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedUpdateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput> =
  z
    .object({
      where: z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => order_itemsUpdateWithoutOrdersInputObjectSchema),
        z.lazy(() => order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema),
      ]),
    })
    .strict();

export const order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema =
  Schema;
