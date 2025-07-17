import { z } from 'zod';
import { salesWhereUniqueInputObjectSchema } from './salesWhereUniqueInput.schema';
import { salesUpdateWithoutStoresInputObjectSchema } from './salesUpdateWithoutStoresInput.schema';
import { salesUncheckedUpdateWithoutStoresInputObjectSchema } from './salesUncheckedUpdateWithoutStoresInput.schema';
import { salesCreateWithoutStoresInputObjectSchema } from './salesCreateWithoutStoresInput.schema';
import { salesUncheckedCreateWithoutStoresInputObjectSchema } from './salesUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesUpsertWithWhereUniqueWithoutStoresInput> = z
  .object({
    where: z.lazy(() => salesWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => salesUpdateWithoutStoresInputObjectSchema),
      z.lazy(() => salesUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => salesCreateWithoutStoresInputObjectSchema),
      z.lazy(() => salesUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
  })
  .strict();

export const salesUpsertWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
