import { z } from 'zod';
import { productsScalarWhereInputObjectSchema } from './productsScalarWhereInput.schema';
import { productsUpdateManyMutationInputObjectSchema } from './productsUpdateManyMutationInput.schema';
import { productsUncheckedUpdateManyWithoutProductsInputObjectSchema } from './productsUncheckedUpdateManyWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsUpdateManyWithWhereWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => productsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => productsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => productsUncheckedUpdateManyWithoutProductsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const productsUpdateManyWithWhereWithoutCategoriesInputObjectSchema =
  Schema;
