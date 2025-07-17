import { z } from 'zod';
import { profilesUpdateWithoutUsersInputObjectSchema } from './profilesUpdateWithoutUsersInput.schema';
import { profilesUncheckedUpdateWithoutUsersInputObjectSchema } from './profilesUncheckedUpdateWithoutUsersInput.schema';
import { profilesCreateWithoutUsersInputObjectSchema } from './profilesCreateWithoutUsersInput.schema';
import { profilesUncheckedCreateWithoutUsersInputObjectSchema } from './profilesUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.profilesUpsertWithoutUsersInput> = z
  .object({
    update: z.union([
      z.lazy(() => profilesUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => profilesUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => profilesCreateWithoutUsersInputObjectSchema),
      z.lazy(() => profilesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const profilesUpsertWithoutUsersInputObjectSchema = Schema;
