import { z } from 'zod';
import { usersCreateWithoutIdentitiesInputObjectSchema } from './usersCreateWithoutIdentitiesInput.schema';
import { usersUncheckedCreateWithoutIdentitiesInputObjectSchema } from './usersUncheckedCreateWithoutIdentitiesInput.schema';
import { usersCreateOrConnectWithoutIdentitiesInputObjectSchema } from './usersCreateOrConnectWithoutIdentitiesInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersCreateNestedOneWithoutIdentitiesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => usersCreateWithoutIdentitiesInputObjectSchema),
        z.lazy(() => usersUncheckedCreateWithoutIdentitiesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => usersCreateOrConnectWithoutIdentitiesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const usersCreateNestedOneWithoutIdentitiesInputObjectSchema = Schema;
