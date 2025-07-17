import { z } from 'zod';
import { usersUpdateWithoutMfa_factorsInputObjectSchema } from './usersUpdateWithoutMfa_factorsInput.schema';
import { usersUncheckedUpdateWithoutMfa_factorsInputObjectSchema } from './usersUncheckedUpdateWithoutMfa_factorsInput.schema';
import { usersCreateWithoutMfa_factorsInputObjectSchema } from './usersCreateWithoutMfa_factorsInput.schema';
import { usersUncheckedCreateWithoutMfa_factorsInputObjectSchema } from './usersUncheckedCreateWithoutMfa_factorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutMfa_factorsInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutMfa_factorsInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutMfa_factorsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutMfa_factorsInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutMfa_factorsInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutMfa_factorsInputObjectSchema = Schema;
