import { z } from 'zod';
import { ordersCreateWithoutCustomersInputObjectSchema } from './ordersCreateWithoutCustomersInput.schema';
import { ordersUncheckedCreateWithoutCustomersInputObjectSchema } from './ordersUncheckedCreateWithoutCustomersInput.schema';
import { ordersCreateOrConnectWithoutCustomersInputObjectSchema } from './ordersCreateOrConnectWithoutCustomersInput.schema';
import { ordersCreateManyCustomersInputEnvelopeObjectSchema } from './ordersCreateManyCustomersInputEnvelope.schema';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateNestedManyWithoutCustomersInput> = z
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
    createMany: z
      .lazy(() => ordersCreateManyCustomersInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ordersWhereUniqueInputObjectSchema),
        z.lazy(() => ordersWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ordersCreateNestedManyWithoutCustomersInputObjectSchema = Schema;
