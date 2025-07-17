import { z } from 'zod';
import { salesWhereUniqueInputObjectSchema } from './salesWhereUniqueInput.schema';
import { salesUpdateWithoutStoresInputObjectSchema } from './salesUpdateWithoutStoresInput.schema';
import { salesUncheckedUpdateWithoutStoresInputObjectSchema } from './salesUncheckedUpdateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesUpdateWithWhereUniqueWithoutStoresInput> = z
  .object({
    where: z.lazy(() => salesWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => salesUpdateWithoutStoresInputObjectSchema),
      z.lazy(() => salesUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
  })
  .strict();

export const salesUpdateWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
