import { z } from 'zod';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesUpdateWithoutUsersInputObjectSchema } from './storesUpdateWithoutUsersInput.schema';
import { storesUncheckedUpdateWithoutUsersInputObjectSchema } from './storesUncheckedUpdateWithoutUsersInput.schema';
import { storesCreateWithoutUsersInputObjectSchema } from './storesCreateWithoutUsersInput.schema';
import { storesUncheckedCreateWithoutUsersInputObjectSchema } from './storesUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpsertWithWhereUniqueWithoutUsersInput> = z
  .object({
    where: z.lazy(() => storesWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => storesUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => storesUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => storesCreateWithoutUsersInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const storesUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
