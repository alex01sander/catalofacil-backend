import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutMfa_factorsInputObjectSchema } from './usersCreateWithoutMfa_factorsInput.schema';
import { usersUncheckedCreateWithoutMfa_factorsInputObjectSchema } from './usersUncheckedCreateWithoutMfa_factorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutMfa_factorsInput> = z
  .object({
    where: z.lazy(() => usersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => usersCreateWithoutMfa_factorsInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutMfa_factorsInputObjectSchema),
    ]),
  })
  .strict();

export const usersCreateOrConnectWithoutMfa_factorsInputObjectSchema = Schema;
