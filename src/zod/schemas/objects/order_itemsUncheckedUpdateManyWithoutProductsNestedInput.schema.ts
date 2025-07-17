import { z } from 'zod';
import { order_itemsCreateWithoutProductsInputObjectSchema } from './order_itemsCreateWithoutProductsInput.schema';
import { order_itemsUncheckedCreateWithoutProductsInputObjectSchema } from './order_itemsUncheckedCreateWithoutProductsInput.schema';
import { order_itemsCreateOrConnectWithoutProductsInputObjectSchema } from './order_itemsCreateOrConnectWithoutProductsInput.schema';
import { order_itemsUpsertWithWhereUniqueWithoutProductsInputObjectSchema } from './order_itemsUpsertWithWhereUniqueWithoutProductsInput.schema';
import { order_itemsCreateManyProductsInputEnvelopeObjectSchema } from './order_itemsCreateManyProductsInputEnvelope.schema';
import { order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsUpdateWithWhereUniqueWithoutProductsInputObjectSchema } from './order_itemsUpdateWithWhereUniqueWithoutProductsInput.schema';
import { order_itemsUpdateManyWithWhereWithoutProductsInputObjectSchema } from './order_itemsUpdateManyWithWhereWithoutProductsInput.schema';
import { order_itemsScalarWhereInputObjectSchema } from './order_itemsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.order_itemsUncheckedUpdateManyWithoutProductsNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              order_itemsUpsertWithWhereUniqueWithoutProductsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                order_itemsUpsertWithWhereUniqueWithoutProductsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => order_itemsCreateManyProductsInputEnvelopeObjectSchema)
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
              order_itemsUpdateWithWhereUniqueWithoutProductsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                order_itemsUpdateWithWhereUniqueWithoutProductsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              order_itemsUpdateManyWithWhereWithoutProductsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                order_itemsUpdateManyWithWhereWithoutProductsInputObjectSchema,
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

export const order_itemsUncheckedUpdateManyWithoutProductsNestedInputObjectSchema =
  Schema;
