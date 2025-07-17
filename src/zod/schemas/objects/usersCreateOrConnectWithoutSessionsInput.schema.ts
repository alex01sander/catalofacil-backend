import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutSessionsInputObjectSchema } from './usersCreateWithoutSessionsInput.schema';
import { usersUncheckedCreateWithoutSessionsInputObjectSchema } from './usersUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutSessionsInput> = z
  .object({
    where: z.lazy(() => usersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => usersCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict();

export const usersCreateOrConnectWithoutSessionsInputObjectSchema = Schema;
