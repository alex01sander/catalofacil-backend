import { z } from 'zod';
import { usersCreateWithoutOrdersInputObjectSchema } from './usersCreateWithoutOrdersInput.schema';
import { usersUncheckedCreateWithoutOrdersInputObjectSchema } from './usersUncheckedCreateWithoutOrdersInput.schema';
import { usersCreateOrConnectWithoutOrdersInputObjectSchema } from './usersCreateOrConnectWithoutOrdersInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutOrdersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => usersCreateWithoutOrdersInputObjectSchema),
        z.lazy(() => usersUncheckedCreateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => usersCreateOrConnectWithoutOrdersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const usersCreateNestedOneWithoutOrdersInputObjectSchema = Schema;
