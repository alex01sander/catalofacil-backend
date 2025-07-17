import { z } from 'zod';
import { order_itemsCreateWithoutProductsInputObjectSchema } from './order_itemsCreateWithoutProductsInput.schema';
import { order_itemsUncheckedCreateWithoutProductsInputObjectSchema } from './order_itemsUncheckedCreateWithoutProductsInput.schema';
import { order_itemsCreateOrConnectWithoutProductsInputObjectSchema } from './order_itemsCreateOrConnectWithoutProductsInput.schema';
import { order_itemsCreateManyProductsInputEnvelopeObjectSchema } from './order_itemsCreateManyProductsInputEnvelope.schema';
import { order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsCreateNestedManyWithoutProductsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => order_itemsCreateWithoutProductsInputObjectSchema),
          z
            .lazy(() => order_itemsCreateWithoutProductsInputObjectSchema)
            .array(),
          z.lazy(
            () => order_itemsUncheckedCreateWithoutProductsInputObjectSchema,
          ),
          z
            .lazy(
              () => order_itemsUncheckedCreateWithoutProductsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => order_itemsCreateOrConnectWithoutProductsInputObjectSchema,
          ),
          z
            .lazy(
              () => order_itemsCreateOrConnectWithoutProductsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => order_itemsCreateManyProductsInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const order_itemsCreateNestedManyWithoutProductsInputObjectSchema =
  Schema;
