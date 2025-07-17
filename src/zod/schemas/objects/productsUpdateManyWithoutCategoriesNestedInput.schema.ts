import { z } from 'zod';
import { productsCreateWithoutCategoriesInputObjectSchema } from './productsCreateWithoutCategoriesInput.schema';
import { productsUncheckedCreateWithoutCategoriesInputObjectSchema } from './productsUncheckedCreateWithoutCategoriesInput.schema';
import { productsCreateOrConnectWithoutCategoriesInputObjectSchema } from './productsCreateOrConnectWithoutCategoriesInput.schema';
import { productsUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema } from './productsUpsertWithWhereUniqueWithoutCategoriesInput.schema';
import { productsCreateManyCategoriesInputEnvelopeObjectSchema } from './productsCreateManyCategoriesInputEnvelope.schema';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema } from './productsUpdateWithWhereUniqueWithoutCategoriesInput.schema';
import { productsUpdateManyWithWhereWithoutCategoriesInputObjectSchema } from './productsUpdateManyWithWhereWithoutCategoriesInput.schema';
import { productsScalarWhereInputObjectSchema } from './productsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpdateManyWithoutCategoriesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => productsCreateWithoutCategoriesInputObjectSchema),
          z
            .lazy(() => productsCreateWithoutCategoriesInputObjectSchema)
            .array(),
          z.lazy(
            () => productsUncheckedCreateWithoutCategoriesInputObjectSchema,
          ),
          z
            .lazy(
              () => productsUncheckedCreateWithoutCategoriesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => productsCreateOrConnectWithoutCategoriesInputObjectSchema,
          ),
          z
            .lazy(
              () => productsCreateOrConnectWithoutCategoriesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              productsUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                productsUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => productsCreateManyCategoriesInputEnvelopeObjectSchema)
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
            () =>
              productsUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                productsUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => productsUpdateManyWithWhereWithoutCategoriesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                productsUpdateManyWithWhereWithoutCategoriesInputObjectSchema,
            )
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

export const productsUpdateManyWithoutCategoriesNestedInputObjectSchema =
  Schema;
