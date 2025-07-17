import { z } from 'zod';
import { categoriesCreateWithoutProductsInputObjectSchema } from './categoriesCreateWithoutProductsInput.schema';
import { categoriesUncheckedCreateWithoutProductsInputObjectSchema } from './categoriesUncheckedCreateWithoutProductsInput.schema';
import { categoriesCreateOrConnectWithoutProductsInputObjectSchema } from './categoriesCreateOrConnectWithoutProductsInput.schema';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesCreateNestedOneWithoutProductsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => categoriesCreateWithoutProductsInputObjectSchema),
          z.lazy(
            () => categoriesUncheckedCreateWithoutProductsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => categoriesCreateOrConnectWithoutProductsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => categoriesWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const categoriesCreateNestedOneWithoutProductsInputObjectSchema = Schema;
