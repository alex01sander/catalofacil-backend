import { z } from 'zod';
import { usersCreateWithoutController_adminsInputObjectSchema } from './usersCreateWithoutController_adminsInput.schema';
import { usersUncheckedCreateWithoutController_adminsInputObjectSchema } from './usersUncheckedCreateWithoutController_adminsInput.schema';
import { usersCreateOrConnectWithoutController_adminsInputObjectSchema } from './usersCreateOrConnectWithoutController_adminsInput.schema';
import { usersUpsertWithoutController_adminsInputObjectSchema } from './usersUpsertWithoutController_adminsInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutController_adminsInputObjectSchema } from './usersUpdateWithoutController_adminsInput.schema';
import { usersUncheckedUpdateWithoutController_adminsInputObjectSchema } from './usersUncheckedUpdateWithoutController_adminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutController_adminsNestedInput> =
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
      upsert: z
        .lazy(() => usersUpsertWithoutController_adminsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutController_adminsInputObjectSchema),
          z.lazy(
            () => usersUncheckedUpdateWithoutController_adminsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutController_adminsNestedInputObjectSchema =
  Schema;
