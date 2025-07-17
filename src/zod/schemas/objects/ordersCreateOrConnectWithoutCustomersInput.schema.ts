import { z } from 'zod';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersCreateWithoutCustomersInputObjectSchema } from './ordersCreateWithoutCustomersInput.schema';
import { ordersUncheckedCreateWithoutCustomersInputObjectSchema } from './ordersUncheckedCreateWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateOrConnectWithoutCustomersInput> = z
  .object({
    where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ordersCreateWithoutCustomersInputObjectSchema),
      z.lazy(() => ordersUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
  })
  .strict();

export const ordersCreateOrConnectWithoutCustomersInputObjectSchema = Schema;
