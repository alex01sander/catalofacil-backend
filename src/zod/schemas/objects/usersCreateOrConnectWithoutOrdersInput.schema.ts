import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutOrdersInputObjectSchema } from './usersCreateWithoutOrdersInput.schema';
import { usersUncheckedCreateWithoutOrdersInputObjectSchema } from './usersUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutOrdersInput> = z
  .object({
    where: z.lazy(() => usersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => usersCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const usersCreateOrConnectWithoutOrdersInputObjectSchema = Schema;
