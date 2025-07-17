import { z } from 'zod';
import { profilesCreateWithoutUsersInputObjectSchema } from './profilesCreateWithoutUsersInput.schema';
import { profilesUncheckedCreateWithoutUsersInputObjectSchema } from './profilesUncheckedCreateWithoutUsersInput.schema';
import { profilesCreateOrConnectWithoutUsersInputObjectSchema } from './profilesCreateOrConnectWithoutUsersInput.schema';
import { profilesWhereUniqueInputObjectSchema } from './profilesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.profilesCreateNestedOneWithoutUsersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => profilesCreateWithoutUsersInputObjectSchema),
        z.lazy(() => profilesUncheckedCreateWithoutUsersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => profilesCreateOrConnectWithoutUsersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => profilesWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const profilesCreateNestedOneWithoutUsersInputObjectSchema = Schema;
