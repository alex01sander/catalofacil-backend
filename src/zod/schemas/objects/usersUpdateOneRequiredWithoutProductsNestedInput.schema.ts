import { z } from 'zod';
import { usersCreateWithoutProductsInputObjectSchema } from './usersCreateWithoutProductsInput.schema';
import { usersUncheckedCreateWithoutProductsInputObjectSchema } from './usersUncheckedCreateWithoutProductsInput.schema';
import { usersCreateOrConnectWithoutProductsInputObjectSchema } from './usersCreateOrConnectWithoutProductsInput.schema';
import { usersUpsertWithoutProductsInputObjectSchema } from './usersUpsertWithoutProductsInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutProductsInputObjectSchema } from './usersUpdateWithoutProductsInput.schema';
import { usersUncheckedUpdateWithoutProductsInputObjectSchema } from './usersUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutProductsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutProductsInputObjectSchema),
          z.lazy(() => usersUncheckedCreateWithoutProductsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutProductsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutProductsInputObjectSchema),
          z.lazy(() => usersUncheckedUpdateWithoutProductsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutProductsNestedInputObjectSchema =
  Schema;
