import { z } from 'zod';
import { storesUpdateWithoutProductsInputObjectSchema } from './storesUpdateWithoutProductsInput.schema';
import { storesUncheckedUpdateWithoutProductsInputObjectSchema } from './storesUncheckedUpdateWithoutProductsInput.schema';
import { storesCreateWithoutProductsInputObjectSchema } from './storesCreateWithoutProductsInput.schema';
import { storesUncheckedCreateWithoutProductsInputObjectSchema } from './storesUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpsertWithoutProductsInput> = z
  .object({
    update: z.union([
      z.lazy(() => storesUpdateWithoutProductsInputObjectSchema),
      z.lazy(() => storesUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => storesCreateWithoutProductsInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const storesUpsertWithoutProductsInputObjectSchema = Schema;
