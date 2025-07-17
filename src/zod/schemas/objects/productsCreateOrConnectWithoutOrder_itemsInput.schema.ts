import { z } from 'zod';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsCreateWithoutOrder_itemsInputObjectSchema } from './productsCreateWithoutOrder_itemsInput.schema';
import { productsUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './productsUncheckedCreateWithoutOrder_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateOrConnectWithoutOrder_itemsInput> =
  z
    .object({
      where: z.lazy(() => productsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => productsCreateWithoutOrder_itemsInputObjectSchema),
        z.lazy(
          () => productsUncheckedCreateWithoutOrder_itemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const productsCreateOrConnectWithoutOrder_itemsInputObjectSchema =
  Schema;
