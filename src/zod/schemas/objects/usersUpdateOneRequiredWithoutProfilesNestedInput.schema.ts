import { z } from 'zod';
import { usersCreateWithoutProfilesInputObjectSchema } from './usersCreateWithoutProfilesInput.schema';
import { usersUncheckedCreateWithoutProfilesInputObjectSchema } from './usersUncheckedCreateWithoutProfilesInput.schema';
import { usersCreateOrConnectWithoutProfilesInputObjectSchema } from './usersCreateOrConnectWithoutProfilesInput.schema';
import { usersUpsertWithoutProfilesInputObjectSchema } from './usersUpsertWithoutProfilesInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutProfilesInputObjectSchema } from './usersUpdateWithoutProfilesInput.schema';
import { usersUncheckedUpdateWithoutProfilesInputObjectSchema } from './usersUncheckedUpdateWithoutProfilesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutProfilesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutProfilesInputObjectSchema),
          z.lazy(() => usersUncheckedCreateWithoutProfilesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutProfilesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutProfilesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutProfilesInputObjectSchema),
          z.lazy(() => usersUncheckedUpdateWithoutProfilesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutProfilesNestedInputObjectSchema =
  Schema;
