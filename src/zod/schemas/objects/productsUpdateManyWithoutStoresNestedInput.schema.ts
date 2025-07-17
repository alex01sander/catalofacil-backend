import { z } from 'zod';
import { productsCreateWithoutStoresInputObjectSchema } from './productsCreateWithoutStoresInput.schema';
import { productsUncheckedCreateWithoutStoresInputObjectSchema } from './productsUncheckedCreateWithoutStoresInput.schema';
import { productsCreateOrConnectWithoutStoresInputObjectSchema } from './productsCreateOrConnectWithoutStoresInput.schema';
import { productsUpsertWithWhereUniqueWithoutStoresInputObjectSchema } from './productsUpsertWithWhereUniqueWithoutStoresInput.schema';
import { productsCreateManyStoresInputEnvelopeObjectSchema } from './productsCreateManyStoresInputEnvelope.schema';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithWhereUniqueWithoutStoresInputObjectSchema } from './productsUpdateWithWhereUniqueWithoutStoresInput.schema';
import { productsUpdateManyWithWhereWithoutStoresInputObjectSchema } from './productsUpdateManyWithWhereWithoutStoresInput.schema';
import { productsScalarWhereInputObjectSchema } from './productsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpdateManyWithoutStoresNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => productsCreateWithoutStoresInputObjectSchema),
        z.lazy(() => productsCreateWithoutStoresInputObjectSchema).array(),
        z.lazy(() => productsUncheckedCreateWithoutStoresInputObjectSchema),
        z
          .lazy(() => productsUncheckedCreateWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => productsCreateOrConnectWithoutStoresInputObjectSchema),
        z
          .lazy(() => productsCreateOrConnectWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => productsUpsertWithWhereUniqueWithoutStoresInputObjectSchema,
        ),
        z
          .lazy(
            () => productsUpsertWithWhereUniqueWithoutStoresInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => productsCreateManyStoresInputEnvelopeObjectSchema)
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
          () => productsUpdateWithWhereUniqueWithoutStoresInputObjectSchema,
        ),
        z
          .lazy(
            () => productsUpdateWithWhereUniqueWithoutStoresInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => productsUpdateManyWithWhereWithoutStoresInputObjectSchema),
        z
          .lazy(() => productsUpdateManyWithWhereWithoutStoresInputObjectSchema)
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

export const productsUpdateManyWithoutStoresNestedInputObjectSchema = Schema;
