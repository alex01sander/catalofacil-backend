import { z } from 'zod';
import { order_itemsCreateWithoutOrdersInputObjectSchema } from './order_itemsCreateWithoutOrdersInput.schema';
import { order_itemsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateWithoutOrdersInput.schema';
import { order_itemsCreateOrConnectWithoutOrdersInputObjectSchema } from './order_itemsCreateOrConnectWithoutOrdersInput.schema';
import { order_itemsCreateManyOrdersInputEnvelopeObjectSchema } from './order_itemsCreateManyOrdersInputEnvelope.schema';
import { order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsCreateNestedManyWithoutOrdersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => order_itemsCreateWithoutOrdersInputObjectSchema),
          z.lazy(() => order_itemsCreateWithoutOrdersInputObjectSchema).array(),
          z.lazy(
            () => order_itemsUncheckedCreateWithoutOrdersInputObjectSchema,
          ),
          z
            .lazy(
              () => order_itemsUncheckedCreateWithoutOrdersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => order_itemsCreateOrConnectWithoutOrdersInputObjectSchema,
          ),
          z
            .lazy(
              () => order_itemsCreateOrConnectWithoutOrdersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => order_itemsCreateManyOrdersInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const order_itemsCreateNestedManyWithoutOrdersInputObjectSchema = Schema;
