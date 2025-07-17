import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutController_adminsInputObjectSchema } from './usersCreateWithoutController_adminsInput.schema';
import { usersUncheckedCreateWithoutController_adminsInputObjectSchema } from './usersUncheckedCreateWithoutController_adminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutController_adminsInput> =
  z
    .object({
      where: z.lazy(() => usersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => usersCreateWithoutController_adminsInputObjectSchema),
        z.lazy(
          () => usersUncheckedCreateWithoutController_adminsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const usersCreateOrConnectWithoutController_adminsInputObjectSchema =
  Schema;
