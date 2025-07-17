import { z } from 'zod';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateWithoutCustomersInputObjectSchema } from './ordersUpdateWithoutCustomersInput.schema';
import { ordersUncheckedUpdateWithoutCustomersInputObjectSchema } from './ordersUncheckedUpdateWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpdateWithWhereUniqueWithoutCustomersInput> =
  z
    .object({
      where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ordersUpdateWithoutCustomersInputObjectSchema),
        z.lazy(() => ordersUncheckedUpdateWithoutCustomersInputObjectSchema),
      ]),
    })
    .strict();

export const ordersUpdateWithWhereUniqueWithoutCustomersInputObjectSchema =
  Schema;
