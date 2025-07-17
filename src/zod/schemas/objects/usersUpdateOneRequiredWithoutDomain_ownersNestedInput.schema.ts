import { z } from 'zod';
import { usersCreateWithoutDomain_ownersInputObjectSchema } from './usersCreateWithoutDomain_ownersInput.schema';
import { usersUncheckedCreateWithoutDomain_ownersInputObjectSchema } from './usersUncheckedCreateWithoutDomain_ownersInput.schema';
import { usersCreateOrConnectWithoutDomain_ownersInputObjectSchema } from './usersCreateOrConnectWithoutDomain_ownersInput.schema';
import { usersUpsertWithoutDomain_ownersInputObjectSchema } from './usersUpsertWithoutDomain_ownersInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutDomain_ownersInputObjectSchema } from './usersUpdateWithoutDomain_ownersInput.schema';
import { usersUncheckedUpdateWithoutDomain_ownersInputObjectSchema } from './usersUncheckedUpdateWithoutDomain_ownersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutDomain_ownersNestedInput> =
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
      upsert: z
        .lazy(() => usersUpsertWithoutDomain_ownersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutDomain_ownersInputObjectSchema),
          z.lazy(
            () => usersUncheckedUpdateWithoutDomain_ownersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutDomain_ownersNestedInputObjectSchema =
  Schema;
