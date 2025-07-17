import { z } from 'zod';
import { usersCreateWithoutStoresInputObjectSchema } from './usersCreateWithoutStoresInput.schema';
import { usersUncheckedCreateWithoutStoresInputObjectSchema } from './usersUncheckedCreateWithoutStoresInput.schema';
import { usersCreateOrConnectWithoutStoresInputObjectSchema } from './usersCreateOrConnectWithoutStoresInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutStoresInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => usersCreateWithoutStoresInputObjectSchema),
        z.lazy(() => usersUncheckedCreateWithoutStoresInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => usersCreateOrConnectWithoutStoresInputObjectSchema)
      .optional(),
    connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const usersCreateNestedOneWithoutStoresInputObjectSchema = Schema;
