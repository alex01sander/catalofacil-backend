import { z } from 'zod';
import { storesScalarWhereInputObjectSchema } from './storesScalarWhereInput.schema';
import { storesUpdateManyMutationInputObjectSchema } from './storesUpdateManyMutationInput.schema';
import { storesUncheckedUpdateManyWithoutStoresInputObjectSchema } from './storesUncheckedUpdateManyWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpdateManyWithWhereWithoutUsersInput> = z
  .object({
    where: z.lazy(() => storesScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => storesUpdateManyMutationInputObjectSchema),
      z.lazy(() => storesUncheckedUpdateManyWithoutStoresInputObjectSchema),
    ]),
  })
  .strict();

export const storesUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
