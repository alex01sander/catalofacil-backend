import { z } from 'zod';
import { controller_adminsCreateWithoutUsersInputObjectSchema } from './controller_adminsCreateWithoutUsersInput.schema';
import { controller_adminsUncheckedCreateWithoutUsersInputObjectSchema } from './controller_adminsUncheckedCreateWithoutUsersInput.schema';
import { controller_adminsCreateOrConnectWithoutUsersInputObjectSchema } from './controller_adminsCreateOrConnectWithoutUsersInput.schema';
import { controller_adminsUpsertWithoutUsersInputObjectSchema } from './controller_adminsUpsertWithoutUsersInput.schema';
import { controller_adminsWhereUniqueInputObjectSchema } from './controller_adminsWhereUniqueInput.schema';
import { controller_adminsUpdateWithoutUsersInputObjectSchema } from './controller_adminsUpdateWithoutUsersInput.schema';
import { controller_adminsUncheckedUpdateWithoutUsersInputObjectSchema } from './controller_adminsUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsUpdateOneWithoutUsersNestedInput> =
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
      upsert: z
        .lazy(() => controller_adminsUpsertWithoutUsersInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => controller_adminsWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => controller_adminsUpdateWithoutUsersInputObjectSchema),
          z.lazy(
            () => controller_adminsUncheckedUpdateWithoutUsersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const controller_adminsUpdateOneWithoutUsersNestedInputObjectSchema =
  Schema;
