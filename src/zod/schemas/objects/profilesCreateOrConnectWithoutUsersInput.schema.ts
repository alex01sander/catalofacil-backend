import { z } from 'zod';
import { profilesWhereUniqueInputObjectSchema } from './profilesWhereUniqueInput.schema';
import { profilesCreateWithoutUsersInputObjectSchema } from './profilesCreateWithoutUsersInput.schema';
import { profilesUncheckedCreateWithoutUsersInputObjectSchema } from './profilesUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.profilesCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => profilesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => profilesCreateWithoutUsersInputObjectSchema),
      z.lazy(() => profilesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const profilesCreateOrConnectWithoutUsersInputObjectSchema = Schema;
