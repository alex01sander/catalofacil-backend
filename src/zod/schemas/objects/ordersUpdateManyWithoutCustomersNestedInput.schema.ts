import { z } from 'zod';
import { ordersCreateWithoutCustomersInputObjectSchema } from './ordersCreateWithoutCustomersInput.schema';
import { ordersUncheckedCreateWithoutCustomersInputObjectSchema } from './ordersUncheckedCreateWithoutCustomersInput.schema';
import { ordersCreateOrConnectWithoutCustomersInputObjectSchema } from './ordersCreateOrConnectWithoutCustomersInput.schema';
import { ordersUpsertWithWhereUniqueWithoutCustomersInputObjectSchema } from './ordersUpsertWithWhereUniqueWithoutCustomersInput.schema';
import { ordersCreateManyCustomersInputEnvelopeObjectSchema } from './ordersCreateManyCustomersInputEnvelope.schema';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateWithWhereUniqueWithoutCustomersInputObjectSchema } from './ordersUpdateWithWhereUniqueWithoutCustomersInput.schema';
import { ordersUpdateManyWithWhereWithoutCustomersInputObjectSchema } from './ordersUpdateManyWithWhereWithoutCustomersInput.schema';
import { ordersScalarWhereInputObjectSchema } from './ordersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpdateManyWithoutCustomersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ordersCreateWithoutCustomersInputObjectSchema),
        z.lazy(() => ordersCreateWithoutCustomersInputObjectSchema).array(),
        z.lazy(() => ordersUncheckedCreateWithoutCustomersInputObjectSchema),
        z
          .lazy(() => ordersUncheckedCreateWithoutCustomersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ordersCreateOrConnectWithoutCustomersInputObjectSchema),
        z
          .lazy(() => ordersCreateOrConnectWithoutCustomersInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ordersUpsertWithWhereUniqueWithoutCustomersInputObjectSchema,
        ),
        z
          .lazy(
            () => ordersUpsertWithWhereUniqueWithoutCustomersInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ordersCreateManyCustomersInputEnvelopeObjectSchema)
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
        z.lazy(
          () => ordersUpdateWithWhereUniqueWithoutCustomersInputObjectSchema,
        ),
        z
          .lazy(
            () => ordersUpdateWithWhereUniqueWithoutCustomersInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ordersUpdateManyWithWhereWithoutCustomersInputObjectSchema,
        ),
        z
          .lazy(
            () => ordersUpdateManyWithWhereWithoutCustomersInputObjectSchema,
          )
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

export const ordersUpdateManyWithoutCustomersNestedInputObjectSchema = Schema;
