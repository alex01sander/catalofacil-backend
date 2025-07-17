import { z } from 'zod';
import { identitiesWhereUniqueInputObjectSchema } from './identitiesWhereUniqueInput.schema';
import { identitiesUpdateWithoutUsersInputObjectSchema } from './identitiesUpdateWithoutUsersInput.schema';
import { identitiesUncheckedUpdateWithoutUsersInputObjectSchema } from './identitiesUncheckedUpdateWithoutUsersInput.schema';
import { identitiesCreateWithoutUsersInputObjectSchema } from './identitiesCreateWithoutUsersInput.schema';
import { identitiesUncheckedCreateWithoutUsersInputObjectSchema } from './identitiesUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesUpsertWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => identitiesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => identitiesUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => identitiesUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => identitiesCreateWithoutUsersInputObjectSchema),
        z.lazy(() => identitiesUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const identitiesUpsertWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
