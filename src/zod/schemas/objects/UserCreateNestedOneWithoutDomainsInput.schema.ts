import { z } from 'zod';
import { UserCreateWithoutDomainsInputObjectSchema } from './UserCreateWithoutDomainsInput.schema';
import { UserUncheckedCreateWithoutDomainsInputObjectSchema } from './UserUncheckedCreateWithoutDomainsInput.schema';
import { UserCreateOrConnectWithoutDomainsInputObjectSchema } from './UserCreateOrConnectWithoutDomainsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutDomainsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutDomainsInputObjectSchema = Schema;
