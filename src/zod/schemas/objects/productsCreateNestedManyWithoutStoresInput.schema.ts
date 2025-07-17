import { z } from 'zod';
import { productsCreateWithoutStoresInputObjectSchema } from './productsCreateWithoutStoresInput.schema';
import { productsUncheckedCreateWithoutStoresInputObjectSchema } from './productsUncheckedCreateWithoutStoresInput.schema';
import { productsCreateOrConnectWithoutStoresInputObjectSchema } from './productsCreateOrConnectWithoutStoresInput.schema';
import { productsCreateManyStoresInputEnvelopeObjectSchema } from './productsCreateManyStoresInputEnvelope.schema';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateNestedManyWithoutStoresInput> = z
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
    createMany: z
      .lazy(() => productsCreateManyStoresInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => productsWhereUniqueInputObjectSchema),
        z.lazy(() => productsWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const productsCreateNestedManyWithoutStoresInputObjectSchema = Schema;
