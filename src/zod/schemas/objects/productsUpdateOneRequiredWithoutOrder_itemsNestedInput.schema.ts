import { z } from 'zod';
import { productsCreateWithoutOrder_itemsInputObjectSchema } from './productsCreateWithoutOrder_itemsInput.schema';
import { productsUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './productsUncheckedCreateWithoutOrder_itemsInput.schema';
import { productsCreateOrConnectWithoutOrder_itemsInputObjectSchema } from './productsCreateOrConnectWithoutOrder_itemsInput.schema';
import { productsUpsertWithoutOrder_itemsInputObjectSchema } from './productsUpsertWithoutOrder_itemsInput.schema';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutOrder_itemsInputObjectSchema } from './productsUpdateWithoutOrder_itemsInput.schema';
import { productsUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './productsUncheckedUpdateWithoutOrder_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpdateOneRequiredWithoutOrder_itemsNestedInput> =
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
      upsert: z
        .lazy(() => productsUpsertWithoutOrder_itemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => productsWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => productsUpdateWithoutOrder_itemsInputObjectSchema),
          z.lazy(
            () => productsUncheckedUpdateWithoutOrder_itemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const productsUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema =
  Schema;
