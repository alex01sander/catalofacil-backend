import { z } from 'zod';
import { controller_adminsUpdateWithoutUsersInputObjectSchema } from './controller_adminsUpdateWithoutUsersInput.schema';
import { controller_adminsUncheckedUpdateWithoutUsersInputObjectSchema } from './controller_adminsUncheckedUpdateWithoutUsersInput.schema';
import { controller_adminsCreateWithoutUsersInputObjectSchema } from './controller_adminsCreateWithoutUsersInput.schema';
import { controller_adminsUncheckedCreateWithoutUsersInputObjectSchema } from './controller_adminsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.controller_adminsUpsertWithoutUsersInput> = z
  .object({
    update: z.union([
      z.lazy(() => controller_adminsUpdateWithoutUsersInputObjectSchema),
      z.lazy(
        () => controller_adminsUncheckedUpdateWithoutUsersInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => controller_adminsCreateWithoutUsersInputObjectSchema),
      z.lazy(
        () => controller_adminsUncheckedCreateWithoutUsersInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const controller_adminsUpsertWithoutUsersInputObjectSchema = Schema;
