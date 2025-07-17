import { z } from 'zod';
import { categoriesCreateWithoutProductsInputObjectSchema } from './categoriesCreateWithoutProductsInput.schema';
import { categoriesUncheckedCreateWithoutProductsInputObjectSchema } from './categoriesUncheckedCreateWithoutProductsInput.schema';
import { categoriesCreateOrConnectWithoutProductsInputObjectSchema } from './categoriesCreateOrConnectWithoutProductsInput.schema';
import { categoriesUpsertWithoutProductsInputObjectSchema } from './categoriesUpsertWithoutProductsInput.schema';
import { categoriesWhereUniqueInputObjectSchema } from './categoriesWhereUniqueInput.schema';
import { categoriesUpdateWithoutProductsInputObjectSchema } from './categoriesUpdateWithoutProductsInput.schema';
import { categoriesUncheckedUpdateWithoutProductsInputObjectSchema } from './categoriesUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoriesUpdateOneWithoutProductsNestedInput> =
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
      upsert: z
        .lazy(() => categoriesUpsertWithoutProductsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => categoriesWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => categoriesUpdateWithoutProductsInputObjectSchema),
          z.lazy(
            () => categoriesUncheckedUpdateWithoutProductsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const categoriesUpdateOneWithoutProductsNestedInputObjectSchema = Schema;
