import { z } from 'zod';
import { usersUpdateWithoutStore_settingsInputObjectSchema } from './usersUpdateWithoutStore_settingsInput.schema';
import { usersUncheckedUpdateWithoutStore_settingsInputObjectSchema } from './usersUncheckedUpdateWithoutStore_settingsInput.schema';
import { usersCreateWithoutStore_settingsInputObjectSchema } from './usersCreateWithoutStore_settingsInput.schema';
import { usersUncheckedCreateWithoutStore_settingsInputObjectSchema } from './usersUncheckedCreateWithoutStore_settingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutStore_settingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutStore_settingsInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutStore_settingsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutStore_settingsInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutStore_settingsInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutStore_settingsInputObjectSchema = Schema;
