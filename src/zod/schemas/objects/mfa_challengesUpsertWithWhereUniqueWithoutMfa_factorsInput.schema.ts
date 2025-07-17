import { z } from 'zod';
import { mfa_challengesWhereUniqueInputObjectSchema } from './mfa_challengesWhereUniqueInput.schema';
import { mfa_challengesUpdateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUpdateWithoutMfa_factorsInput.schema';
import { mfa_challengesUncheckedUpdateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUncheckedUpdateWithoutMfa_factorsInput.schema';
import { mfa_challengesCreateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesCreateWithoutMfa_factorsInput.schema';
import { mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema } from './mfa_challengesUncheckedCreateWithoutMfa_factorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInput> =
  z
    .object({
      where: z.lazy(() => mfa_challengesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => mfa_challengesUpdateWithoutMfa_factorsInputObjectSchema),
        z.lazy(
          () =>
            mfa_challengesUncheckedUpdateWithoutMfa_factorsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => mfa_challengesCreateWithoutMfa_factorsInputObjectSchema),
        z.lazy(
          () =>
            mfa_challengesUncheckedCreateWithoutMfa_factorsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const mfa_challengesUpsertWithWhereUniqueWithoutMfa_factorsInputObjectSchema =
  Schema;
