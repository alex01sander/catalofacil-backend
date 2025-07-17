import { z } from 'zod';
import { ordersCreateWithoutStoresInputObjectSchema } from './ordersCreateWithoutStoresInput.schema';
import { ordersUncheckedCreateWithoutStoresInputObjectSchema } from './ordersUncheckedCreateWithoutStoresInput.schema';
import { ordersCreateOrConnectWithoutStoresInputObjectSchema } from './ordersCreateOrConnectWithoutStoresInput.schema';
import { ordersCreateManyStoresInputEnvelopeObjectSchema } from './ordersCreateManyStoresInputEnvelope.schema';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateNestedManyWithoutStoresInput> = z
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
    createMany: z
      .lazy(() => ordersCreateManyStoresInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ordersWhereUniqueInputObjectSchema),
        z.lazy(() => ordersWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ordersCreateNestedManyWithoutStoresInputObjectSchema = Schema;
