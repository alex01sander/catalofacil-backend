import { z } from 'zod';
import { usersCreateWithoutMfa_factorsInputObjectSchema } from './usersCreateWithoutMfa_factorsInput.schema';
import { usersUncheckedCreateWithoutMfa_factorsInputObjectSchema } from './usersUncheckedCreateWithoutMfa_factorsInput.schema';
import { usersCreateOrConnectWithoutMfa_factorsInputObjectSchema } from './usersCreateOrConnectWithoutMfa_factorsInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutMfa_factorsInput> = z
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
    connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const usersCreateNestedOneWithoutMfa_factorsInputObjectSchema = Schema;
