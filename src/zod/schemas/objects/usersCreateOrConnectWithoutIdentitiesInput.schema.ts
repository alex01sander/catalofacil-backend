import { z } from 'zod';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersCreateWithoutIdentitiesInputObjectSchema } from './usersCreateWithoutIdentitiesInput.schema';
import { usersUncheckedCreateWithoutIdentitiesInputObjectSchema } from './usersUncheckedCreateWithoutIdentitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateOrConnectWithoutIdentitiesInput> = z
  .object({
    where: z.lazy(() => usersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => usersCreateWithoutIdentitiesInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutIdentitiesInputObjectSchema),
    ]),
  })
  .strict();

export const usersCreateOrConnectWithoutIdentitiesInputObjectSchema = Schema;
