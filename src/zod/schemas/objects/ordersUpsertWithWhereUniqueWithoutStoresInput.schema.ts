import { z } from 'zod';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateWithoutStoresInputObjectSchema } from './ordersUpdateWithoutStoresInput.schema';
import { ordersUncheckedUpdateWithoutStoresInputObjectSchema } from './ordersUncheckedUpdateWithoutStoresInput.schema';
import { ordersCreateWithoutStoresInputObjectSchema } from './ordersCreateWithoutStoresInput.schema';
import { ordersUncheckedCreateWithoutStoresInputObjectSchema } from './ordersUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpsertWithWhereUniqueWithoutStoresInput> =
  z
    .object({
      where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ordersUpdateWithoutStoresInputObjectSchema),
        z.lazy(() => ordersUncheckedUpdateWithoutStoresInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ordersCreateWithoutStoresInputObjectSchema),
        z.lazy(() => ordersUncheckedCreateWithoutStoresInputObjectSchema),
      ]),
    })
    .strict();

export const ordersUpsertWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
