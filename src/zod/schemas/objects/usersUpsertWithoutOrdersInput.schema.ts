import { z } from 'zod';
import { usersUpdateWithoutOrdersInputObjectSchema } from './usersUpdateWithoutOrdersInput.schema';
import { usersUncheckedUpdateWithoutOrdersInputObjectSchema } from './usersUncheckedUpdateWithoutOrdersInput.schema';
import { usersCreateWithoutOrdersInputObjectSchema } from './usersCreateWithoutOrdersInput.schema';
import { usersUncheckedCreateWithoutOrdersInputObjectSchema } from './usersUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutOrdersInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutOrdersInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutOrdersInputObjectSchema = Schema;
