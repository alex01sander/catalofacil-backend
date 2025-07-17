import { z } from 'zod';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateWithoutUsersInputObjectSchema } from './ordersUpdateWithoutUsersInput.schema';
import { ordersUncheckedUpdateWithoutUsersInputObjectSchema } from './ordersUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpdateWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ordersUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => ordersUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const ordersUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
