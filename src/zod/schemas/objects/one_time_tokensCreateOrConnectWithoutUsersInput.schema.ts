import { z } from 'zod';
import { one_time_tokensWhereUniqueInputObjectSchema } from './one_time_tokensWhereUniqueInput.schema';
import { one_time_tokensCreateWithoutUsersInputObjectSchema } from './one_time_tokensCreateWithoutUsersInput.schema';
import { one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema } from './one_time_tokensUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensCreateOrConnectWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => one_time_tokensWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => one_time_tokensCreateWithoutUsersInputObjectSchema),
        z.lazy(
          () => one_time_tokensUncheckedCreateWithoutUsersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const one_time_tokensCreateOrConnectWithoutUsersInputObjectSchema =
  Schema;
