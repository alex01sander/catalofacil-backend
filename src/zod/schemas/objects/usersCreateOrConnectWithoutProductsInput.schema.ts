import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutProductsInputObjectSchema } from './usersCreateWithoutProductsInput.schema';
import { usersUncheckedCreateWithoutProductsInputObjectSchema } from './usersUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutProductsInput> = z
  .object({
    where: z.lazy(() => usersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => usersCreateWithoutProductsInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const usersCreateOrConnectWithoutProductsInputObjectSchema = Schema;
