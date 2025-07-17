import { z } from 'zod';
import { usersUpdateWithoutCustomersInputObjectSchema } from './usersUpdateWithoutCustomersInput.schema';
import { usersUncheckedUpdateWithoutCustomersInputObjectSchema } from './usersUncheckedUpdateWithoutCustomersInput.schema';
import { usersCreateWithoutCustomersInputObjectSchema } from './usersCreateWithoutCustomersInput.schema';
import { usersUncheckedCreateWithoutCustomersInputObjectSchema } from './usersUncheckedCreateWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutCustomersInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutCustomersInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutCustomersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutCustomersInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutCustomersInputObjectSchema = Schema;
