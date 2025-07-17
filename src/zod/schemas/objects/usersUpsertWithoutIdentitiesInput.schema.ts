import { z } from 'zod';
import { usersUpdateWithoutIdentitiesInputObjectSchema } from './usersUpdateWithoutIdentitiesInput.schema';
import { usersUncheckedUpdateWithoutIdentitiesInputObjectSchema } from './usersUncheckedUpdateWithoutIdentitiesInput.schema';
import { usersCreateWithoutIdentitiesInputObjectSchema } from './usersCreateWithoutIdentitiesInput.schema';
import { usersUncheckedCreateWithoutIdentitiesInputObjectSchema } from './usersUncheckedCreateWithoutIdentitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpsertWithoutIdentitiesInput> = z
  .object({
    update: z.union([
      z.lazy(() => usersUpdateWithoutIdentitiesInputObjectSchema),
      z.lazy(() => usersUncheckedUpdateWithoutIdentitiesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => usersCreateWithoutIdentitiesInputObjectSchema),
      z.lazy(() => usersUncheckedCreateWithoutIdentitiesInputObjectSchema),
    ]),
  })
  .strict();

export const usersUpsertWithoutIdentitiesInputObjectSchema = Schema;
