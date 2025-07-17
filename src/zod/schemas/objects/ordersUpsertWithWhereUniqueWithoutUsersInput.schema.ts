import { z } from 'zod';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateWithoutUsersInputObjectSchema } from './ordersUpdateWithoutUsersInput.schema';
import { ordersUncheckedUpdateWithoutUsersInputObjectSchema } from './ordersUncheckedUpdateWithoutUsersInput.schema';
import { ordersCreateWithoutUsersInputObjectSchema } from './ordersCreateWithoutUsersInput.schema';
import { ordersUncheckedCreateWithoutUsersInputObjectSchema } from './ordersUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpsertWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ordersUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => ordersUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ordersCreateWithoutUsersInputObjectSchema),
      z.lazy(() => ordersUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const ordersUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
