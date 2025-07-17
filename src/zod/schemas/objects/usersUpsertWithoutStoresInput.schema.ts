import { z } from 'zod';
import { usersUpdateWithoutStoresInputObjectSchema } from './usersUpdateWithoutStoresInput.schema';
import { usersUncheckedUpdateWithoutStoresInputObjectSchema } from './usersUncheckedUpdateWithoutStoresInput.schema';
import { usersCreateWithoutStoresInputObjectSchema } from './usersCreateWithoutStoresInput.schema';
import { usersUncheckedCreateWithoutStoresInputObjectSchema } from './usersUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutStoresInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutStoresInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutStoresInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutStoresInputObjectSchema = Schema;
