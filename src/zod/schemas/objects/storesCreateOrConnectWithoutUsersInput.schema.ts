import { z } from 'zod';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesCreateWithoutUsersInputObjectSchema } from './storesCreateWithoutUsersInput.schema';
import { storesUncheckedCreateWithoutUsersInputObjectSchema } from './storesUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateOrConnectWithoutUsersInput> = z
  .object({
    where: z.lazy(() => storesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => storesCreateWithoutUsersInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const storesCreateOrConnectWithoutUsersInputObjectSchema = Schema;
