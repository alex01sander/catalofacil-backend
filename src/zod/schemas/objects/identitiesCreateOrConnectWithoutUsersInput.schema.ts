import { z } from 'zod';
import { identitiesWhereUniqueInputObjectSchema } from './identitiesWhereUniqueInput.schema';
import { identitiesCreateWithoutUsersInputObjectSchema } from './identitiesCreateWithoutUsersInput.schema';
import { identitiesUncheckedCreateWithoutUsersInputObjectSchema } from './identitiesUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => identitiesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => identitiesCreateWithoutUsersInputObjectSchema),
      z.lazy(() => identitiesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const identitiesCreateOrConnectWithoutUsersInputObjectSchema = Schema;
