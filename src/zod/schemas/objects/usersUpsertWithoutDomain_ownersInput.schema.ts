import { z } from 'zod';
import { usersUpdateWithoutDomain_ownersInputObjectSchema } from './usersUpdateWithoutDomain_ownersInput.schema';
import { usersUncheckedUpdateWithoutDomain_ownersInputObjectSchema } from './usersUncheckedUpdateWithoutDomain_ownersInput.schema';
import { usersCreateWithoutDomain_ownersInputObjectSchema } from './usersCreateWithoutDomain_ownersInput.schema';
import { usersUncheckedCreateWithoutDomain_ownersInputObjectSchema } from './usersUncheckedCreateWithoutDomain_ownersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutDomain_ownersInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutDomain_ownersInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutDomain_ownersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutDomain_ownersInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutDomain_ownersInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutDomain_ownersInputObjectSchema = Schema;
