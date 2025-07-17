import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutDomain_ownersInputObjectSchema } from './usersCreateWithoutDomain_ownersInput.schema';
import { usersUncheckedCreateWithoutDomain_ownersInputObjectSchema } from './usersUncheckedCreateWithoutDomain_ownersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutDomain_ownersInput> =
  z
    .object({
      where: z.lazy(() => usersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => usersCreateWithoutDomain_ownersInputObjectSchema),
        z.lazy(() => usersUncheckedCreateWithoutDomain_ownersInputObjectSchema),
      ]),
    })
    .strict();

export const usersCreateOrConnectWithoutDomain_ownersInputObjectSchema = Schema;
