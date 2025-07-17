import { z } from 'zod';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersCreateWithoutStoresInputObjectSchema } from './ordersCreateWithoutStoresInput.schema';
import { ordersUncheckedCreateWithoutStoresInputObjectSchema } from './ordersUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateOrConnectWithoutStoresInput> = z
  .object({
    where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ordersCreateWithoutStoresInputObjectSchema),
      z.lazy(() => ordersUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
  })
  .strict();

export const ordersCreateOrConnectWithoutStoresInputObjectSchema = Schema;
