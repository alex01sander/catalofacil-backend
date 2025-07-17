import { z } from 'zod';
import { one_time_tokensScalarWhereInputObjectSchema } from './one_time_tokensScalarWhereInput.schema';
import { one_time_tokensUpdateManyMutationInputObjectSchema } from './one_time_tokensUpdateManyMutationInput.schema';
import { one_time_tokensUncheckedUpdateManyWithoutOne_time_tokensInputObjectSchema } from './one_time_tokensUncheckedUpdateManyWithoutOne_time_tokensInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensUpdateManyWithWhereWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => one_time_tokensScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => one_time_tokensUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            one_time_tokensUncheckedUpdateManyWithoutOne_time_tokensInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const one_time_tokensUpdateManyWithWhereWithoutUsersInputObjectSchema =
  Schema;
