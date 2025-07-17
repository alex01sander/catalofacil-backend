import { z } from 'zod';
import { usersUpdateWithoutController_adminsInputObjectSchema } from './usersUpdateWithoutController_adminsInput.schema';
import { usersUncheckedUpdateWithoutController_adminsInputObjectSchema } from './usersUncheckedUpdateWithoutController_adminsInput.schema';
import { usersCreateWithoutController_adminsInputObjectSchema } from './usersCreateWithoutController_adminsInput.schema';
import { usersUncheckedCreateWithoutController_adminsInputObjectSchema } from './usersUncheckedCreateWithoutController_adminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutController_adminsInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutController_adminsInputObjectSchema),
      z.lazy(
        () => usersUncheckedUpdateWithoutController_adminsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutController_adminsInputObjectSchema),
      z.lazy(
        () => usersUncheckedCreateWithoutController_adminsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const usersUpsertWithoutController_adminsInputObjectSchema = Schema;
