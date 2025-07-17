import { z } from 'zod';
import { order_itemsCreateWithoutOrdersInputObjectSchema } from './order_itemsCreateWithoutOrdersInput.schema';
import { order_itemsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateWithoutOrdersInput.schema';
import { order_itemsCreateOrConnectWithoutOrdersInputObjectSchema } from './order_itemsCreateOrConnectWithoutOrdersInput.schema';
import { order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema } from './order_itemsUpsertWithWhereUniqueWithoutOrdersInput.schema';
import { order_itemsCreateManyOrdersInputEnvelopeObjectSchema } from './order_itemsCreateManyOrdersInputEnvelope.schema';
import { order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema } from './order_itemsUpdateWithWhereUniqueWithoutOrdersInput.schema';
import { order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema } from './order_itemsUpdateManyWithWhereWithoutOrdersInput.schema';
import { order_itemsScalarWhereInputObjectSchema } from './order_itemsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsUncheckedUpdateManyWithoutOrdersNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => order_itemsCreateManyOrdersInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
          z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => order_itemsScalarWhereInputObjectSchema),
          z.lazy(() => order_itemsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const order_itemsUncheckedUpdateManyWithoutOrdersNestedInputObjectSchema =
  Schema;
