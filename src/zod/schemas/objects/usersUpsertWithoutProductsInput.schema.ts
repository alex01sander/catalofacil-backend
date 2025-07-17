import { z } from 'zod';
import { usersUpdateWithoutProductsInputObjectSchema } from './usersUpdateWithoutProductsInput.schema';
import { usersUncheckedUpdateWithoutProductsInputObjectSchema } from './usersUncheckedUpdateWithoutProductsInput.schema';
import { usersCreateWithoutProductsInputObjectSchema } from './usersCreateWithoutProductsInput.schema';
import { usersUncheckedCreateWithoutProductsInputObjectSchema } from './usersUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutProductsInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutProductsInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutProductsInputObjectSchema = Schema;
