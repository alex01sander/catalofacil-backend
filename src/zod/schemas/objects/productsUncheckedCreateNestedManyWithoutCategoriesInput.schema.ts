import { z } from 'zod';
import { productsCreateWithoutCategoriesInputObjectSchema } from './productsCreateWithoutCategoriesInput.schema';
import { productsUncheckedCreateWithoutCategoriesInputObjectSchema } from './productsUncheckedCreateWithoutCategoriesInput.schema';
import { productsCreateOrConnectWithoutCategoriesInputObjectSchema } from './productsCreateOrConnectWithoutCategoriesInput.schema';
import { productsCreateManyCategoriesInputEnvelopeObjectSchema } from './productsCreateManyCategoriesInputEnvelope.schema';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUncheckedCreateNestedManyWithoutCategoriesInput> =
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
      createMany: z
        .lazy(() => productsCreateManyCategoriesInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => productsWhereUniqueInputObjectSchema),
          z.lazy(() => productsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const productsUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema =
  Schema;
