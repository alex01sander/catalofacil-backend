import { z } from 'zod';
import { profilesCreateWithoutUsersInputObjectSchema } from './profilesCreateWithoutUsersInput.schema';
import { profilesUncheckedCreateWithoutUsersInputObjectSchema } from './profilesUncheckedCreateWithoutUsersInput.schema';
import { profilesCreateOrConnectWithoutUsersInputObjectSchema } from './profilesCreateOrConnectWithoutUsersInput.schema';
import { profilesUpsertWithoutUsersInputObjectSchema } from './profilesUpsertWithoutUsersInput.schema';
import { profilesWhereUniqueInputObjectSchema } from './profilesWhereUniqueInput.schema';
import { profilesUpdateWithoutUsersInputObjectSchema } from './profilesUpdateWithoutUsersInput.schema';
import { profilesUncheckedUpdateWithoutUsersInputObjectSchema } from './profilesUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.profilesUpdateOneWithoutUsersNestedInput> = z
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
    upsert: z
      .lazy(() => profilesUpsertWithoutUsersInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => profilesWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => profilesUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => profilesUncheckedUpdateWithoutUsersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const profilesUpdateOneWithoutUsersNestedInputObjectSchema = Schema;
