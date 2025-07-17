import { z } from 'zod';
import { categoriesScalarWhereInputObjectSchema } from './categoriesScalarWhereInput.schema';
import { categoriesUpdateManyMutationInputObjectSchema } from './categoriesUpdateManyMutationInput.schema';
import { categoriesUncheckedUpdateManyWithoutCategoriesInputObjectSchema } from './categoriesUncheckedUpdateManyWithoutCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUpdateManyWithWhereWithoutStoresInput> =
  z
    .object({
      where: z.lazy(() => categoriesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => categoriesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => categoriesUncheckedUpdateManyWithoutCategoriesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const categoriesUpdateManyWithWhereWithoutStoresInputObjectSchema =
  Schema;
