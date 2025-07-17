import { z } from 'zod';
import { ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersCreateWithoutUsersInputObjectSchema } from './ordersCreateWithoutUsersInput.schema';
import { ordersUncheckedCreateWithoutUsersInputObjectSchema } from './ordersUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ordersCreateWithoutUsersInputObjectSchema),
      z.lazy(() => ordersUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const ordersCreateOrConnectWithoutUsersInputObjectSchema = Schema;
