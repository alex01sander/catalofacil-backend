import { z } from 'zod';
import { store_settingsUpdateWithoutUsersInputObjectSchema } from './store_settingsUpdateWithoutUsersInput.schema';
import { store_settingsUncheckedUpdateWithoutUsersInputObjectSchema } from './store_settingsUncheckedUpdateWithoutUsersInput.schema';
import { store_settingsCreateWithoutUsersInputObjectSchema } from './store_settingsCreateWithoutUsersInput.schema';
import { store_settingsUncheckedCreateWithoutUsersInputObjectSchema } from './store_settingsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.store_settingsUpsertWithoutUsersInput> = z
  .object({
    update: z.union([
      z.lazy(() => store_settingsUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => store_settingsUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => store_settingsCreateWithoutUsersInputObjectSchema),
      z.lazy(() => store_settingsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const store_settingsUpsertWithoutUsersInputObjectSchema = Schema;
