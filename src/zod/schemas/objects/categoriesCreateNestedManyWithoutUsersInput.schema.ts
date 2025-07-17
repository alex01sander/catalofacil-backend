import { z } from 'zod';
import { categoriesCreateWithoutUsersInputObjectSchema } from './categoriesCreateWithoutUsersInput.schema';
import { categoriesUncheckedCreateWithoutUsersInputObjectSchema } from './categoriesUncheckedCreateWithoutUsersInput.schema';
import { categoriesCreateOrConnectWithoutUsersInputObjectSchema } from './categoriesCreateOrConnectWithoutUsersInput.schema';
import { categoriesCreateManyUsersInputEnvelopeObjectSchema } from './categoriesCreateManyUsersInputEnvelope.schema';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateNestedManyWithoutUsersInput> = z
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
    createMany: z
      .lazy(() => categoriesCreateManyUsersInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => categoriesWhereUniqueInputObjectSchema),
        z.lazy(() => categoriesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const categoriesCreateNestedManyWithoutUsersInputObjectSchema = Schema;
