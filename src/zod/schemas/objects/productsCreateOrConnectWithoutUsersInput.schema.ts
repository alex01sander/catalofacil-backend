import { z } from 'zod';
import { productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsCreateWithoutUsersInputObjectSchema } from './productsCreateWithoutUsersInput.schema';
import { productsUncheckedCreateWithoutUsersInputObjectSchema } from './productsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.productsCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => productsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => productsCreateWithoutUsersInputObjectSchema),
      z.lazy(() => productsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const productsCreateOrConnectWithoutUsersInputObjectSchema = Schema;
