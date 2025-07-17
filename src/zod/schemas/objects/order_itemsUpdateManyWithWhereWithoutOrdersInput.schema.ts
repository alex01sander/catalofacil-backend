import { z } from 'zod';
import { order_itemsScalarWhereInputObjectSchema } from './order_itemsScalarWhereInput.schema';
import { order_itemsUpdateManyMutationInputObjectSchema } from './order_itemsUpdateManyMutationInput.schema';
import { order_itemsUncheckedUpdateManyWithoutOrder_itemsInputObjectSchema } from './order_itemsUncheckedUpdateManyWithoutOrder_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput> =
  z
    .object({
      where: z.lazy(() => order_itemsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => order_itemsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            order_itemsUncheckedUpdateManyWithoutOrder_itemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema =
  Schema;
