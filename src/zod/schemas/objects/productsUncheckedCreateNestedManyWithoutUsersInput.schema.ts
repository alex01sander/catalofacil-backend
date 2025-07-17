import { z } from 'zod';
import { productsCreateWithoutUsersInputObjectSchema } from './productsCreateWithoutUsersInput.schema';
import { productsUncheckedCreateWithoutUsersInputObjectSchema } from './productsUncheckedCreateWithoutUsersInput.schema';
import { productsCreateOrConnectWithoutUsersInputObjectSchema } from './productsCreateOrConnectWithoutUsersInput.schema';
import { productsCreateManyUsersInputEnvelopeObjectSchema } from './productsCreateManyUsersInputEnvelope.schema';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUncheckedCreateNestedManyWithoutUsersInput> =
  z
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
      createMany: z
        .lazy(() => productsCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => productsWhereUniqueInputObjectSchema),
          z.lazy(() => productsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const productsUncheckedCreateNestedManyWithoutUsersInputObjectSchema =
  Schema;
