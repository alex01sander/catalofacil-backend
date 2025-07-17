import { z } from 'zod';
import { usersCreateWithoutCustomersInputObjectSchema } from './usersCreateWithoutCustomersInput.schema';
import { usersUncheckedCreateWithoutCustomersInputObjectSchema } from './usersUncheckedCreateWithoutCustomersInput.schema';
import { usersCreateOrConnectWithoutCustomersInputObjectSchema } from './usersCreateOrConnectWithoutCustomersInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutCustomersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => usersCreateWithoutCustomersInputObjectSchema),
        z.lazy(() => usersUncheckedCreateWithoutCustomersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => usersCreateOrConnectWithoutCustomersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const usersCreateNestedOneWithoutCustomersInputObjectSchema = Schema;
