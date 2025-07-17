import { z } from 'zod';
import { mfa_challengesScalarWhereInputObjectSchema } from './mfa_challengesScalarWhereInput.schema';
import { mfa_challengesUpdateManyMutationInputObjectSchema } from './mfa_challengesUpdateManyMutationInput.schema';
import { mfa_challengesUncheckedUpdateManyWithoutMfa_challengesInputObjectSchema } from './mfa_challengesUncheckedUpdateManyWithoutMfa_challengesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInput> =
  z
    .object({
      where: z.lazy(() => mfa_challengesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => mfa_challengesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            mfa_challengesUncheckedUpdateManyWithoutMfa_challengesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const mfa_challengesUpdateManyWithWhereWithoutMfa_factorsInputObjectSchema =
  Schema;
