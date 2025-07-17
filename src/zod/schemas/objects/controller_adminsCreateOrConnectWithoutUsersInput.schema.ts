import { z } from 'zod';
import { controller_adminsWhereUniqueInputObjectSchema } from './controller_adminsWhereUniqueInput.schema';
import { controller_adminsCreateWithoutUsersInputObjectSchema } from './controller_adminsCreateWithoutUsersInput.schema';
import { controller_adminsUncheckedCreateWithoutUsersInputObjectSchema } from './controller_adminsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsCreateOrConnectWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => controller_adminsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => controller_adminsCreateWithoutUsersInputObjectSchema),
        z.lazy(
          () => controller_adminsUncheckedCreateWithoutUsersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const controller_adminsCreateOrConnectWithoutUsersInputObjectSchema =
  Schema;
