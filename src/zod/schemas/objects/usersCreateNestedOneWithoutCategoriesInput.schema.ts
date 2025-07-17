import { z } from 'zod';
import { usersCreateWithoutCategoriesInputObjectSchema } from './usersCreateWithoutCategoriesInput.schema';
import { usersUncheckedCreateWithoutCategoriesInputObjectSchema } from './usersUncheckedCreateWithoutCategoriesInput.schema';
import { usersCreateOrConnectWithoutCategoriesInputObjectSchema } from './usersCreateOrConnectWithoutCategoriesInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutCategoriesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => usersCreateWithoutCategoriesInputObjectSchema),
        z.lazy(() => usersUncheckedCreateWithoutCategoriesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => usersCreateOrConnectWithoutCategoriesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const usersCreateNestedOneWithoutCategoriesInputObjectSchema = Schema;
