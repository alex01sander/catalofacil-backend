import { z } from 'zod';
import { storesUpdateWithoutSalesInputObjectSchema } from './storesUpdateWithoutSalesInput.schema';
import { storesUncheckedUpdateWithoutSalesInputObjectSchema } from './storesUncheckedUpdateWithoutSalesInput.schema';
import { storesCreateWithoutSalesInputObjectSchema } from './storesCreateWithoutSalesInput.schema';
import { storesUncheckedCreateWithoutSalesInputObjectSchema } from './storesUncheckedCreateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpsertWithoutSalesInput> = z
  .object({
    update: z.union([
      z.lazy(() => storesUpdateWithoutSalesInputObjectSchema),
      z.lazy(() => storesUncheckedUpdateWithoutSalesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => storesCreateWithoutSalesInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const storesUpsertWithoutSalesInputObjectSchema = Schema;
