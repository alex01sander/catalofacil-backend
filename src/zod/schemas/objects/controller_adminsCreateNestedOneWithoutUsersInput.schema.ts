import { z } from 'zod';
import { controller_adminsCreateWithoutUsersInputObjectSchema } from './controller_adminsCreateWithoutUsersInput.schema';
import { controller_adminsUncheckedCreateWithoutUsersInputObjectSchema } from './controller_adminsUncheckedCreateWithoutUsersInput.schema';
import { controller_adminsCreateOrConnectWithoutUsersInputObjectSchema } from './controller_adminsCreateOrConnectWithoutUsersInput.schema';
import { controller_adminsWhereUniqueInputObjectSchema } from './controller_adminsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsCreateNestedOneWithoutUsersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => controller_adminsCreateWithoutUsersInputObjectSchema),
          z.lazy(
            () => controller_adminsUncheckedCreateWithoutUsersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => controller_adminsCreateOrConnectWithoutUsersInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => controller_adminsWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const controller_adminsCreateNestedOneWithoutUsersInputObjectSchema =
  Schema;
