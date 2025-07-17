import { z } from 'zod';
import { refresh_tokensScalarWhereInputObjectSchema } from './refresh_tokensScalarWhereInput.schema';
import { refresh_tokensUpdateManyMutationInputObjectSchema } from './refresh_tokensUpdateManyMutationInput.schema';
import { refresh_tokensUncheckedUpdateManyWithoutRefresh_tokensInputObjectSchema } from './refresh_tokensUncheckedUpdateManyWithoutRefresh_tokensInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensUpdateManyWithWhereWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => refresh_tokensScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => refresh_tokensUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            refresh_tokensUncheckedUpdateManyWithoutRefresh_tokensInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const refresh_tokensUpdateManyWithWhereWithoutSessionsInputObjectSchema =
  Schema;
