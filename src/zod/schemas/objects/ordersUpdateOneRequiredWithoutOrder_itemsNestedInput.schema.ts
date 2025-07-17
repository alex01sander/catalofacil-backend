import { z } from 'zod';
import { ordersCreateWithoutOrder_itemsInputObjectSchema } from './ordersCreateWithoutOrder_itemsInput.schema';
import { ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_itemsInput.schema';
import { ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema } from './ordersCreateOrConnectWithoutOrder_itemsInput.schema';
import { ordersUpsertWithoutOrder_itemsInputObjectSchema } from './ordersUpsertWithoutOrder_itemsInput.schema';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateWithoutOrder_itemsInputObjectSchema } from './ordersUpdateWithoutOrder_itemsInput.schema';
import { ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedUpdateWithoutOrder_itemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpdateOneRequiredWithoutOrder_itemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ordersCreateWithoutOrder_itemsInputObjectSchema),
          z.lazy(
            () => ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ordersUpsertWithoutOrder_itemsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ordersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ordersUpdateWithoutOrder_itemsInputObjectSchema),
          z.lazy(
            () => ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ordersUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema =
  Schema;
