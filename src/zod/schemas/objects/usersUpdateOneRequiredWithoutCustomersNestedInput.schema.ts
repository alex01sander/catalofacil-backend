import { z } from 'zod';
import { usersCreateWithoutCustomersInputObjectSchema } from './usersCreateWithoutCustomersInput.schema';
import { usersUncheckedCreateWithoutCustomersInputObjectSchema } from './usersUncheckedCreateWithoutCustomersInput.schema';
import { usersCreateOrConnectWithoutCustomersInputObjectSchema } from './usersCreateOrConnectWithoutCustomersInput.schema';
import { usersUpsertWithoutCustomersInputObjectSchema } from './usersUpsertWithoutCustomersInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutCustomersInputObjectSchema } from './usersUpdateWithoutCustomersInput.schema';
import { usersUncheckedUpdateWithoutCustomersInputObjectSchema } from './usersUncheckedUpdateWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutCustomersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutCustomersInputObjectSchema),
          z.lazy(() => usersUncheckedCreateWithoutCustomersInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutCustomersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutCustomersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutCustomersInputObjectSchema),
          z.lazy(() => usersUncheckedUpdateWithoutCustomersInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutCustomersNestedInputObjectSchema =
  Schema;
