import { z } from 'zod';
import { domain_ownersWhereUniqueInputObjectSchema } from './domain_ownersWhereUniqueInput.schema';
import { domain_ownersUpdateWithoutUsersInputObjectSchema } from './domain_ownersUpdateWithoutUsersInput.schema';
import { domain_ownersUncheckedUpdateWithoutUsersInputObjectSchema } from './domain_ownersUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersUpdateWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => domain_ownersWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => domain_ownersUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => domain_ownersUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const domain_ownersUpdateWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
