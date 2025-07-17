import { z } from 'zod';
import { mfa_factorsWhereUniqueInputObjectSchema } from './mfa_factorsWhereUniqueInput.schema';
import { mfa_factorsCreateWithoutUsersInputObjectSchema } from './mfa_factorsCreateWithoutUsersInput.schema';
import { mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema } from './mfa_factorsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => mfa_factorsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => mfa_factorsCreateWithoutUsersInputObjectSchema),
      z.lazy(() => mfa_factorsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const mfa_factorsCreateOrConnectWithoutUsersInputObjectSchema = Schema;
