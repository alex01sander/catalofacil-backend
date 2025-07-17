import { z } from 'zod';
import { domain_ownersWhereUniqueInputObjectSchema } from './domain_ownersWhereUniqueInput.schema';
import { domain_ownersUpdateWithoutUsersInputObjectSchema } from './domain_ownersUpdateWithoutUsersInput.schema';
import { domain_ownersUncheckedUpdateWithoutUsersInputObjectSchema } from './domain_ownersUncheckedUpdateWithoutUsersInput.schema';
import { domain_ownersCreateWithoutUsersInputObjectSchema } from './domain_ownersCreateWithoutUsersInput.schema';
import { domain_ownersUncheckedCreateWithoutUsersInputObjectSchema } from './domain_ownersUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersUpsertWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => domain_ownersWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => domain_ownersUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => domain_ownersUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => domain_ownersCreateWithoutUsersInputObjectSchema),
        z.lazy(() => domain_ownersUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const domain_ownersUpsertWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
