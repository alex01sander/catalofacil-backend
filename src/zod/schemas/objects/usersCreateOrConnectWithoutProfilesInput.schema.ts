import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutProfilesInputObjectSchema } from './usersCreateWithoutProfilesInput.schema';
import { usersUncheckedCreateWithoutProfilesInputObjectSchema } from './usersUncheckedCreateWithoutProfilesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutProfilesInput> = z
  .object({
    where: z.lazy(() => usersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => usersCreateWithoutProfilesInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutProfilesInputObjectSchema),
    ]),
  })
  .strict();

export const usersCreateOrConnectWithoutProfilesInputObjectSchema = Schema;
