import { z } from 'zod';
import { ordersCreateWithoutStoresInputObjectSchema } from './ordersCreateWithoutStoresInput.schema';
import { ordersUncheckedCreateWithoutStoresInputObjectSchema } from './ordersUncheckedCreateWithoutStoresInput.schema';
import { ordersCreateOrConnectWithoutStoresInputObjectSchema } from './ordersCreateOrConnectWithoutStoresInput.schema';
import { ordersUpsertWithWhereUniqueWithoutStoresInputObjectSchema } from './ordersUpsertWithWhereUniqueWithoutStoresInput.schema';
import { ordersCreateManyStoresInputEnvelopeObjectSchema } from './ordersCreateManyStoresInputEnvelope.schema';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateWithWhereUniqueWithoutStoresInputObjectSchema } from './ordersUpdateWithWhereUniqueWithoutStoresInput.schema';
import { ordersUpdateManyWithWhereWithoutStoresInputObjectSchema } from './ordersUpdateManyWithWhereWithoutStoresInput.schema';
import { ordersScalarWhereInputObjectSchema } from './ordersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpdateManyWithoutStoresNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ordersCreateWithoutStoresInputObjectSchema),
        z.lazy(() => ordersCreateWithoutStoresInputObjectSchema).array(),
        z.lazy(() => ordersUncheckedCreateWithoutStoresInputObjectSchema),
        z
          .lazy(() => ordersUncheckedCreateWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ordersCreateOrConnectWithoutStoresInputObjectSchema),
        z
          .lazy(() => ordersCreateOrConnectWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ordersUpsertWithWhereUniqueWithoutStoresInputObjectSchema),
        z
          .lazy(() => ordersUpsertWithWhereUniqueWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ordersCreateManyStoresInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ordersWhereUniqueInputObjectSchema),
        z.lazy(() => ordersWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ordersWhereUniqueInputObjectSchema),
        z.lazy(() => ordersWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ordersWhereUniqueInputObjectSchema),
        z.lazy(() => ordersWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ordersWhereUniqueInputObjectSchema),
        z.lazy(() => ordersWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ordersUpdateWithWhereUniqueWithoutStoresInputObjectSchema),
        z
          .lazy(() => ordersUpdateWithWhereUniqueWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ordersUpdateManyWithWhereWithoutStoresInputObjectSchema),
        z
          .lazy(() => ordersUpdateManyWithWhereWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ordersScalarWhereInputObjectSchema),
        z.lazy(() => ordersScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ordersUpdateManyWithoutStoresNestedInputObjectSchema = Schema;
