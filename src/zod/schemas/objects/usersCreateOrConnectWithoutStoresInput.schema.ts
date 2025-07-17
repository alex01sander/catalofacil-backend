import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutStoresInputObjectSchema } from './usersCreateWithoutStoresInput.schema';
import { usersUncheckedCreateWithoutStoresInputObjectSchema } from './usersUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutStoresInput> = z
  .object({
    where: z.lazy(() => usersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => usersCreateWithoutStoresInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
  })
  .strict();

export const usersCreateOrConnectWithoutStoresInputObjectSchema = Schema;
