import { z } from 'zod';
import { usersCreateWithoutProfilesInputObjectSchema } from './usersCreateWithoutProfilesInput.schema';
import { usersUncheckedCreateWithoutProfilesInputObjectSchema } from './usersUncheckedCreateWithoutProfilesInput.schema';
import { usersCreateOrConnectWithoutProfilesInputObjectSchema } from './usersCreateOrConnectWithoutProfilesInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutProfilesInput> = z
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
    connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const usersCreateNestedOneWithoutProfilesInputObjectSchema = Schema;
