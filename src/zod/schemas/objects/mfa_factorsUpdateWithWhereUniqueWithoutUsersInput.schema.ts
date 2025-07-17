import { z } from 'zod';
import { mfa_factorsWhereUniqueInputObjectSchema } from './mfa_factorsWhereUniqueInput.schema';
import { mfa_factorsUpdateWithoutUsersInputObjectSchema } from './mfa_factorsUpdateWithoutUsersInput.schema';
import { mfa_factorsUncheckedUpdateWithoutUsersInputObjectSchema } from './mfa_factorsUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsUpdateWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => mfa_factorsUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => mfa_factorsUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const mfa_factorsUpdateWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
