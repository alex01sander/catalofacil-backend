import { z } from 'zod';
import { usersCreateWithoutController_adminsInputObjectSchema } from './usersCreateWithoutController_adminsInput.schema';
import { usersUncheckedCreateWithoutController_adminsInputObjectSchema } from './usersUncheckedCreateWithoutController_adminsInput.schema';
import { usersCreateOrConnectWithoutController_adminsInputObjectSchema } from './usersCreateOrConnectWithoutController_adminsInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutController_adminsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutController_adminsInputObjectSchema),
          z.lazy(
            () => usersUncheckedCreateWithoutController_adminsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => usersCreateOrConnectWithoutController_adminsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const usersCreateNestedOneWithoutController_adminsInputObjectSchema =
  Schema;
