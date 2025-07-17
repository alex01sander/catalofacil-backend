import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDomainsInputObjectSchema } from './UserCreateWithoutDomainsInput.schema';
import { UserUncheckedCreateWithoutDomainsInputObjectSchema } from './UserUncheckedCreateWithoutDomainsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDomainsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutDomainsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDomainsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutDomainsInputObjectSchema = Schema;
