import { z } from 'zod';
import { usersCreateWithoutDomain_ownersInputObjectSchema } from './usersCreateWithoutDomain_ownersInput.schema';
import { usersUncheckedCreateWithoutDomain_ownersInputObjectSchema } from './usersUncheckedCreateWithoutDomain_ownersInput.schema';
import { usersCreateOrConnectWithoutDomain_ownersInputObjectSchema } from './usersCreateOrConnectWithoutDomain_ownersInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutDomain_ownersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutDomain_ownersInputObjectSchema),
          z.lazy(
            () => usersUncheckedCreateWithoutDomain_ownersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutDomain_ownersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const usersCreateNestedOneWithoutDomain_ownersInputObjectSchema = Schema;
