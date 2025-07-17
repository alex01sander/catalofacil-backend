import { z } from 'zod';
import { usersCreateWithoutMfa_factorsInputObjectSchema } from './usersCreateWithoutMfa_factorsInput.schema';
import { usersUncheckedCreateWithoutMfa_factorsInputObjectSchema } from './usersUncheckedCreateWithoutMfa_factorsInput.schema';
import { usersCreateOrConnectWithoutMfa_factorsInputObjectSchema } from './usersCreateOrConnectWithoutMfa_factorsInput.schema';
import { usersUpsertWithoutMfa_factorsInputObjectSchema } from './usersUpsertWithoutMfa_factorsInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutMfa_factorsInputObjectSchema } from './usersUpdateWithoutMfa_factorsInput.schema';
import { usersUncheckedUpdateWithoutMfa_factorsInputObjectSchema } from './usersUncheckedUpdateWithoutMfa_factorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutMfa_factorsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutMfa_factorsInputObjectSchema),
          z.lazy(() => usersUncheckedCreateWithoutMfa_factorsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutMfa_factorsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutMfa_factorsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutMfa_factorsInputObjectSchema),
          z.lazy(() => usersUncheckedUpdateWithoutMfa_factorsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutMfa_factorsNestedInputObjectSchema =
  Schema;
