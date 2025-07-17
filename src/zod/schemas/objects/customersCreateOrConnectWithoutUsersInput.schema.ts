import { z } from 'zod';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';
import { customersCreateWithoutUsersInputObjectSchema } from './customersCreateWithoutUsersInput.schema';
import { customersUncheckedCreateWithoutUsersInputObjectSchema } from './customersUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => customersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => customersCreateWithoutUsersInputObjectSchema),
      z.lazy(() => customersUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const customersCreateOrConnectWithoutUsersInputObjectSchema = Schema;
