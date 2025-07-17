import { z } from 'zod';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateWithoutStoresInputObjectSchema } from './ordersUpdateWithoutStoresInput.schema';
import { ordersUncheckedUpdateWithoutStoresInputObjectSchema } from './ordersUncheckedUpdateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpdateWithWhereUniqueWithoutStoresInput> =
  z
    .object({
      where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ordersUpdateWithoutStoresInputObjectSchema),
        z.lazy(() => ordersUncheckedUpdateWithoutStoresInputObjectSchema),
      ]),
    })
    .strict();

export const ordersUpdateWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
