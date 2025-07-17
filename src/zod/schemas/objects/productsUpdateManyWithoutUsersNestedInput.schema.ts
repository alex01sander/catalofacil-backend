import { z } from 'zod';
import { productsCreateWithoutUsersInputObjectSchema } from './productsCreateWithoutUsersInput.schema';
import { productsUncheckedCreateWithoutUsersInputObjectSchema } from './productsUncheckedCreateWithoutUsersInput.schema';
import { productsCreateOrConnectWithoutUsersInputObjectSchema } from './productsCreateOrConnectWithoutUsersInput.schema';
import { productsUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './productsUpsertWithWhereUniqueWithoutUsersInput.schema';
import { productsCreateManyUsersInputEnvelopeObjectSchema } from './productsCreateManyUsersInputEnvelope.schema';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './productsUpdateWithWhereUniqueWithoutUsersInput.schema';
import { productsUpdateManyWithWhereWithoutUsersInputObjectSchema } from './productsUpdateManyWithWhereWithoutUsersInput.schema';
import { productsScalarWhereInputObjectSchema } from './productsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpdateManyWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => productsCreateWithoutUsersInputObjectSchema),
        z.lazy(() => productsCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => productsUncheckedCreateWithoutUsersInputObjectSchema),
        z
          .lazy(() => productsUncheckedCreateWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => productsCreateOrConnectWithoutUsersInputObjectSchema),
        z
          .lazy(() => productsCreateOrConnectWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => productsUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
        ),
        z
          .lazy(
            () => productsUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => productsCreateManyUsersInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => productsWhereUniqueInputObjectSchema),
        z.lazy(() => productsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => productsWhereUniqueInputObjectSchema),
        z.lazy(() => productsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => productsWhereUniqueInputObjectSchema),
        z.lazy(() => productsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => productsWhereUniqueInputObjectSchema),
        z.lazy(() => productsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => productsUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
        ),
        z
          .lazy(
            () => productsUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => productsUpdateManyWithWhereWithoutUsersInputObjectSchema),
        z
          .lazy(() => productsUpdateManyWithWhereWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => productsScalarWhereInputObjectSchema),
        z.lazy(() => productsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const productsUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
