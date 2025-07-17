import { z } from 'zod';
import { UserUpdateWithoutDomainsInputObjectSchema } from './UserUpdateWithoutDomainsInput.schema';
import { UserUncheckedUpdateWithoutDomainsInputObjectSchema } from './UserUncheckedUpdateWithoutDomainsInput.schema';
import { UserCreateWithoutDomainsInputObjectSchema } from './UserCreateWithoutDomainsInput.schema';
import { UserUncheckedCreateWithoutDomainsInputObjectSchema } from './UserUncheckedCreateWithoutDomainsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutDomainsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutDomainsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutDomainsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutDomainsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDomainsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutDomainsInputObjectSchema = Schema;
