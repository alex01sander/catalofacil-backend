import { z } from 'zod';
import { identitiesScalarWhereInputObjectSchema } from './identitiesScalarWhereInput.schema';
import { identitiesUpdateManyMutationInputObjectSchema } from './identitiesUpdateManyMutationInput.schema';
import { identitiesUncheckedUpdateManyWithoutIdentitiesInputObjectSchema } from './identitiesUncheckedUpdateManyWithoutIdentitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.identitiesUpdateManyWithWhereWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => identitiesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => identitiesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => identitiesUncheckedUpdateManyWithoutIdentitiesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const identitiesUpdateManyWithWhereWithoutUsersInputObjectSchema =
  Schema;
