import { z } from 'zod';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateWithoutCustomersInputObjectSchema } from './ordersUpdateWithoutCustomersInput.schema';
import { ordersUncheckedUpdateWithoutCustomersInputObjectSchema } from './ordersUncheckedUpdateWithoutCustomersInput.schema';
import { ordersCreateWithoutCustomersInputObjectSchema } from './ordersCreateWithoutCustomersInput.schema';
import { ordersUncheckedCreateWithoutCustomersInputObjectSchema } from './ordersUncheckedCreateWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpsertWithWhereUniqueWithoutCustomersInput> =
  z
    .object({
      where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ordersUpdateWithoutCustomersInputObjectSchema),
        z.lazy(() => ordersUncheckedUpdateWithoutCustomersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ordersCreateWithoutCustomersInputObjectSchema),
        z.lazy(() => ordersUncheckedCreateWithoutCustomersInputObjectSchema),
      ]),
    })
    .strict();

export const ordersUpsertWithWhereUniqueWithoutCustomersInputObjectSchema =
  Schema;
