import { z } from 'zod';
import { mfa_factorsScalarWhereInputObjectSchema } from './mfa_factorsScalarWhereInput.schema';
import { mfa_factorsUpdateManyMutationInputObjectSchema } from './mfa_factorsUpdateManyMutationInput.schema';
import { mfa_factorsUncheckedUpdateManyWithoutMfa_factorsInputObjectSchema } from './mfa_factorsUncheckedUpdateManyWithoutMfa_factorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsUpdateManyWithWhereWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => mfa_factorsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => mfa_factorsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            mfa_factorsUncheckedUpdateManyWithoutMfa_factorsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const mfa_factorsUpdateManyWithWhereWithoutUsersInputObjectSchema =
  Schema;
