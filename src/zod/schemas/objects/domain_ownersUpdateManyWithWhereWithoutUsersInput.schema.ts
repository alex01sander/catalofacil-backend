import { z } from 'zod';
import { domain_ownersScalarWhereInputObjectSchema } from './domain_ownersScalarWhereInput.schema';
import { domain_ownersUpdateManyMutationInputObjectSchema } from './domain_ownersUpdateManyMutationInput.schema';
import { domain_ownersUncheckedUpdateManyWithoutDomain_ownersInputObjectSchema } from './domain_ownersUncheckedUpdateManyWithoutDomain_ownersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersUpdateManyWithWhereWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => domain_ownersScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => domain_ownersUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            domain_ownersUncheckedUpdateManyWithoutDomain_ownersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const domain_ownersUpdateManyWithWhereWithoutUsersInputObjectSchema =
  Schema;
