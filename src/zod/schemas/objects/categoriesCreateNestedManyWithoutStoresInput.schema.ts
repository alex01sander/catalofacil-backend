import { z } from 'zod';
import { categoriesCreateWithoutStoresInputObjectSchema } from './categoriesCreateWithoutStoresInput.schema';
import { categoriesUncheckedCreateWithoutStoresInputObjectSchema } from './categoriesUncheckedCreateWithoutStoresInput.schema';
import { categoriesCreateOrConnectWithoutStoresInputObjectSchema } from './categoriesCreateOrConnectWithoutStoresInput.schema';
import { categoriesCreateManyStoresInputEnvelopeObjectSchema } from './categoriesCreateManyStoresInputEnvelope.schema';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateNestedManyWithoutStoresInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => categoriesCreateWithoutStoresInputObjectSchema),
        z.lazy(() => categoriesCreateWithoutStoresInputObjectSchema).array(),
        z.lazy(() => categoriesUncheckedCreateWithoutStoresInputObjectSchema),
        z
          .lazy(() => categoriesUncheckedCreateWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => categoriesCreateOrConnectWithoutStoresInputObjectSchema),
        z
          .lazy(() => categoriesCreateOrConnectWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => categoriesCreateManyStoresInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => categoriesWhereUniqueInputObjectSchema),
        z.lazy(() => categoriesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const categoriesCreateNestedManyWithoutStoresInputObjectSchema = Schema;
