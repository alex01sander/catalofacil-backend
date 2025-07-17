import { z } from 'zod';
import { identitiesWhereUniqueInputObjectSchema } from './identitiesWhereUniqueInput.schema';
import { identitiesUpdateWithoutUsersInputObjectSchema } from './identitiesUpdateWithoutUsersInput.schema';
import { identitiesUncheckedUpdateWithoutUsersInputObjectSchema } from './identitiesUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesUpdateWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => identitiesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => identitiesUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => identitiesUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const identitiesUpdateWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
