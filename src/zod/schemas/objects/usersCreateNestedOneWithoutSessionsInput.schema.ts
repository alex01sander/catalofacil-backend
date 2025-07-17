import { z } from 'zod';
import { usersCreateWithoutSessionsInputObjectSchema } from './usersCreateWithoutSessionsInput.schema';
import { usersUncheckedCreateWithoutSessionsInputObjectSchema } from './usersUncheckedCreateWithoutSessionsInput.schema';
import { usersCreateOrConnectWithoutSessionsInputObjectSchema } from './usersCreateOrConnectWithoutSessionsInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutSessionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => usersCreateWithoutSessionsInputObjectSchema),
        z.lazy(() => usersUncheckedCreateWithoutSessionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => usersCreateOrConnectWithoutSessionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const usersCreateNestedOneWithoutSessionsInputObjectSchema = Schema;
