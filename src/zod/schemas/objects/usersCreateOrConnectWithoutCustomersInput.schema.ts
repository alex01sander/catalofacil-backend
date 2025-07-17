import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutCustomersInputObjectSchema } from './usersCreateWithoutCustomersInput.schema';
import { usersUncheckedCreateWithoutCustomersInputObjectSchema } from './usersUncheckedCreateWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutCustomersInput> = z
  .object({
    where: z.lazy(() => usersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => usersCreateWithoutCustomersInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
  })
  .strict();

export const usersCreateOrConnectWithoutCustomersInputObjectSchema = Schema;
