import { z } from 'zod';
import { mfa_challengesWhereUniqueInputObjectSchema } from './mfa_challengesWhereUniqueInput.schema';
import { mfa_challengesUpdateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUpdateWithoutMfa_factorsInput.schema';
import { mfa_challengesUncheckedUpdateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUncheckedUpdateWithoutMfa_factorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInput> =
  z
    .object({
      where: z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => mfa_challengesUpdateWithoutMfa_factorsInputObjectSchema),
        z.lazy(
          () =>
            mfa_challengesUncheckedUpdateWithoutMfa_factorsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const mfa_challengesUpdateWithWhereUniqueWithoutMfa_factorsInputObjectSchema =
  Schema;
