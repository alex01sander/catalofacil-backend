import { z } from 'zod';
import { UserCreateWithoutDomainsInputObjectSchema } from './UserCreateWithoutDomainsInput.schema';
import { UserUncheckedCreateWithoutDomainsInputObjectSchema } from './UserUncheckedCreateWithoutDomainsInput.schema';
import { UserCreateOrConnectWithoutDomainsInputObjectSchema } from './UserCreateOrConnectWithoutDomainsInput.schema';
import { UserUpsertWithoutDomainsInputObjectSchema } from './UserUpsertWithoutDomainsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDomainsInputObjectSchema } from './UserUpdateWithoutDomainsInput.schema';
import { UserUncheckedUpdateWithoutDomainsInputObjectSchema } from './UserUncheckedUpdateWithoutDomainsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDomainsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutDomainsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutDomainsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutDomainsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutDomainsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutDomainsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutDomainsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutDomainsNestedInputObjectSchema =
  Schema;
