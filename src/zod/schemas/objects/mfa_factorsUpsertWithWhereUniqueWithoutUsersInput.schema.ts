import { z } from 'zod';
import { mfa_factorsWhereUniqueInputObjectSchema } from './mfa_factorsWhereUniqueInput.schema';
import { mfa_factorsUpdateWithoutUsersInputObjectSchema } from './mfa_factorsUpdateWithoutUsersInput.schema';
import { mfa_factorsUncheckedUpdateWithoutUsersInputObjectSchema } from './mfa_factorsUncheckedUpdateWithoutUsersInput.schema';
import { mfa_factorsCreateWithoutUsersInputObjectSchema } from './mfa_factorsCreateWithoutUsersInput.schema';
import { mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema } from './mfa_factorsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsUpsertWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => mfa_factorsUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => mfa_factorsUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => mfa_factorsCreateWithoutUsersInputObjectSchema),
        z.lazy(() => mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const mfa_factorsUpsertWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
