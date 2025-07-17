import { z } from 'zod';
import { domain_ownersWhereUniqueInputObjectSchema } from './domain_ownersWhereUniqueInput.schema';
import { domain_ownersCreateWithoutUsersInputObjectSchema } from './domain_ownersCreateWithoutUsersInput.schema';
import { domain_ownersUncheckedCreateWithoutUsersInputObjectSchema } from './domain_ownersUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersCreateOrConnectWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => domain_ownersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => domain_ownersCreateWithoutUsersInputObjectSchema),
        z.lazy(() => domain_ownersUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const domain_ownersCreateOrConnectWithoutUsersInputObjectSchema = Schema;
