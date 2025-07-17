import { z } from 'zod';
import { ordersCreateWithoutUsersInputObjectSchema } from './ordersCreateWithoutUsersInput.schema';
import { ordersUncheckedCreateWithoutUsersInputObjectSchema } from './ordersUncheckedCreateWithoutUsersInput.schema';
import { ordersCreateOrConnectWithoutUsersInputObjectSchema } from './ordersCreateOrConnectWithoutUsersInput.schema';
import { ordersCreateManyUsersInputEnvelopeObjectSchema } from './ordersCreateManyUsersInputEnvelope.schema';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUncheckedCreateNestedManyWithoutUsersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ordersCreateWithoutUsersInputObjectSchema),
          z.lazy(() => ordersCreateWithoutUsersInputObjectSchema).array(),
          z.lazy(() => ordersUncheckedCreateWithoutUsersInputObjectSchema),
          z
            .lazy(() => ordersUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ordersCreateOrConnectWithoutUsersInputObjectSchema),
          z
            .lazy(() => ordersCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ordersCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ordersWhereUniqueInputObjectSchema),
          z.lazy(() => ordersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ordersUncheckedCreateNestedManyWithoutUsersInputObjectSchema =
  Schema;
