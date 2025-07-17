import { z } from 'zod';
import { ordersCreateWithoutUsersInputObjectSchema } from './ordersCreateWithoutUsersInput.schema';
import { ordersUncheckedCreateWithoutUsersInputObjectSchema } from './ordersUncheckedCreateWithoutUsersInput.schema';
import { ordersCreateOrConnectWithoutUsersInputObjectSchema } from './ordersCreateOrConnectWithoutUsersInput.schema';
import { ordersUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './ordersUpsertWithWhereUniqueWithoutUsersInput.schema';
import { ordersCreateManyUsersInputEnvelopeObjectSchema } from './ordersCreateManyUsersInputEnvelope.schema';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './ordersUpdateWithWhereUniqueWithoutUsersInput.schema';
import { ordersUpdateManyWithWhereWithoutUsersInputObjectSchema } from './ordersUpdateManyWithWhereWithoutUsersInput.schema';
import { ordersScalarWhereInputObjectSchema } from './ordersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpdateManyWithoutUsersNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ordersUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => ordersUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ordersCreateManyUsersInputEnvelopeObjectSchema)
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
        z.lazy(() => ordersUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => ordersUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ordersUpdateManyWithWhereWithoutUsersInputObjectSchema),
        z
          .lazy(() => ordersUpdateManyWithWhereWithoutUsersInputObjectSchema)
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

export const ordersUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
