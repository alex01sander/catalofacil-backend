import { z } from 'zod';
import { order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsUpdateWithoutOrdersInputObjectSchema } from './order_itemsUpdateWithoutOrdersInput.schema';
import { order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedUpdateWithoutOrdersInput.schema';
import { order_itemsCreateWithoutOrdersInputObjectSchema } from './order_itemsCreateWithoutOrdersInput.schema';
import { order_itemsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput> =
  z
    .object({
      where: z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => order_itemsUpdateWithoutOrdersInputObjectSchema),
        z.lazy(() => order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => order_itemsCreateWithoutOrdersInputObjectSchema),
        z.lazy(() => order_itemsUncheckedCreateWithoutOrdersInputObjectSchema),
      ]),
    })
    .strict();

export const order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema =
  Schema;
