import { z } from 'zod';
import { categoriesCreateWithoutUsersInputObjectSchema } from './categoriesCreateWithoutUsersInput.schema';
import { categoriesUncheckedCreateWithoutUsersInputObjectSchema } from './categoriesUncheckedCreateWithoutUsersInput.schema';
import { categoriesCreateOrConnectWithoutUsersInputObjectSchema } from './categoriesCreateOrConnectWithoutUsersInput.schema';
import { categoriesUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './categoriesUpsertWithWhereUniqueWithoutUsersInput.schema';
import { categoriesCreateManyUsersInputEnvelopeObjectSchema } from './categoriesCreateManyUsersInputEnvelope.schema';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';
import { categoriesUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './categoriesUpdateWithWhereUniqueWithoutUsersInput.schema';
import { categoriesUpdateManyWithWhereWithoutUsersInputObjectSchema } from './categoriesUpdateManyWithWhereWithoutUsersInput.schema';
import { categoriesScalarWhereInputObjectSchema } from './categoriesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUpdateManyWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => categoriesCreateWithoutUsersInputObjectSchema),
        z.lazy(() => categoriesCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => categoriesUncheckedCreateWithoutUsersInputObjectSchema),
        z
          .lazy(() => categoriesUncheckedCreateWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => categoriesCreateOrConnectWithoutUsersInputObjectSchema),
        z
          .lazy(() => categoriesCreateOrConnectWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => categoriesUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
        ),
        z
          .lazy(
            () => categoriesUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => categoriesCreateManyUsersInputEnvelopeObjectSchema)
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
          () => categoriesUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
        ),
        z
          .lazy(
            () => categoriesUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => categoriesUpdateManyWithWhereWithoutUsersInputObjectSchema,
        ),
        z
          .lazy(
            () => categoriesUpdateManyWithWhereWithoutUsersInputObjectSchema,
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

export const categoriesUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
