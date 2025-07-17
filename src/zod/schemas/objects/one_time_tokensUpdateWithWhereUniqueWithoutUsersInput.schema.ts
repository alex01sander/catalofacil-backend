import { z } from 'zod';
import { one_time_tokensWhereUniqueInputObjectSchema } from './one_time_tokensWhereUniqueInput.schema';
import { one_time_tokensUpdateWithoutUsersInputObjectSchema } from './one_time_tokensUpdateWithoutUsersInput.schema';
import { one_time_tokensUncheckedUpdateWithoutUsersInputObjectSchema } from './one_time_tokensUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensUpdateWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => one_time_tokensUpdateWithoutUsersInputObjectSchema),
        z.lazy(
          () => one_time_tokensUncheckedUpdateWithoutUsersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const one_time_tokensUpdateWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
