import { z } from 'zod';
import { categoriesCreateWithoutStoresInputObjectSchema } from './categoriesCreateWithoutStoresInput.schema';
import { categoriesUncheckedCreateWithoutStoresInputObjectSchema } from './categoriesUncheckedCreateWithoutStoresInput.schema';
import { categoriesCreateOrConnectWithoutStoresInputObjectSchema } from './categoriesCreateOrConnectWithoutStoresInput.schema';
import { categoriesUpsertWithWhereUniqueWithoutStoresInputObjectSchema } from './categoriesUpsertWithWhereUniqueWithoutStoresInput.schema';
import { categoriesCreateManyStoresInputEnvelopeObjectSchema } from './categoriesCreateManyStoresInputEnvelope.schema';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';
import { categoriesUpdateWithWhereUniqueWithoutStoresInputObjectSchema } from './categoriesUpdateWithWhereUniqueWithoutStoresInput.schema';
import { categoriesUpdateManyWithWhereWithoutStoresInputObjectSchema } from './categoriesUpdateManyWithWhereWithoutStoresInput.schema';
import { categoriesScalarWhereInputObjectSchema } from './categoriesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUpdateManyWithoutStoresNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => categoriesUpsertWithWhereUniqueWithoutStoresInputObjectSchema,
        ),
        z
          .lazy(
            () => categoriesUpsertWithWhereUniqueWithoutStoresInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => categoriesCreateManyStoresInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => categoriesWhereUniqueInputObjectSchema),
        z.lazy(() => categoriesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => categoriesWhereUniqueInputObjectSchema),
        z.lazy(() => categoriesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => categoriesWhereUniqueInputObjectSchema),
        z.lazy(() => categoriesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => categoriesWhereUniqueInputObjectSchema),
        z.lazy(() => categoriesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => categoriesUpdateWithWhereUniqueWithoutStoresInputObjectSchema,
        ),
        z
          .lazy(
            () => categoriesUpdateWithWhereUniqueWithoutStoresInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => categoriesUpdateManyWithWhereWithoutStoresInputObjectSchema,
        ),
        z
          .lazy(
            () => categoriesUpdateManyWithWhereWithoutStoresInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => categoriesScalarWhereInputObjectSchema),
        z.lazy(() => categoriesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const categoriesUpdateManyWithoutStoresNestedInputObjectSchema = Schema;
