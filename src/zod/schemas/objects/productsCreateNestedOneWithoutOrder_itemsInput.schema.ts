import { z } from 'zod';
import { productsCreateWithoutOrder_itemsInputObjectSchema } from './productsCreateWithoutOrder_itemsInput.schema';
import { productsUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './productsUncheckedCreateWithoutOrder_itemsInput.schema';
import { productsCreateOrConnectWithoutOrder_itemsInputObjectSchema } from './productsCreateOrConnectWithoutOrder_itemsInput.schema';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateNestedOneWithoutOrder_itemsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => productsCreateWithoutOrder_itemsInputObjectSchema),
          z.lazy(
            () => productsUncheckedCreateWithoutOrder_itemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => productsCreateOrConnectWithoutOrder_itemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => productsWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const productsCreateNestedOneWithoutOrder_itemsInputObjectSchema =
  Schema;
