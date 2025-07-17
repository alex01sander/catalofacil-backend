import { z } from 'zod';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesUpdateWithoutUsersInputObjectSchema } from './storesUpdateWithoutUsersInput.schema';
import { storesUncheckedUpdateWithoutUsersInputObjectSchema } from './storesUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpdateWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => storesWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => storesUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => storesUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const storesUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
