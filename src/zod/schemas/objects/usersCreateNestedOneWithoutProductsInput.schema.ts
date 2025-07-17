import { z } from 'zod';
import { usersCreateWithoutProductsInputObjectSchema } from './usersCreateWithoutProductsInput.schema';
import { usersUncheckedCreateWithoutProductsInputObjectSchema } from './usersUncheckedCreateWithoutProductsInput.schema';
import { usersCreateOrConnectWithoutProductsInputObjectSchema } from './usersCreateOrConnectWithoutProductsInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutProductsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => usersCreateWithoutProductsInputObjectSchema),
        z.lazy(() => usersUncheckedCreateWithoutProductsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => usersCreateOrConnectWithoutProductsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const usersCreateNestedOneWithoutProductsInputObjectSchema = Schema;
