import { z } from 'zod';
import { usersUpdateWithoutProfilesInputObjectSchema } from './usersUpdateWithoutProfilesInput.schema';
import { usersUncheckedUpdateWithoutProfilesInputObjectSchema } from './usersUncheckedUpdateWithoutProfilesInput.schema';
import { usersCreateWithoutProfilesInputObjectSchema } from './usersCreateWithoutProfilesInput.schema';
import { usersUncheckedCreateWithoutProfilesInputObjectSchema } from './usersUncheckedCreateWithoutProfilesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutProfilesInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutProfilesInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutProfilesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutProfilesInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutProfilesInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutProfilesInputObjectSchema = Schema;
