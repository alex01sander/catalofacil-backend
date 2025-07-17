import { z } from 'zod';
import { storesUpdateWithoutCustomersInputObjectSchema } from './storesUpdateWithoutCustomersInput.schema';
import { storesUncheckedUpdateWithoutCustomersInputObjectSchema } from './storesUncheckedUpdateWithoutCustomersInput.schema';
import { storesCreateWithoutCustomersInputObjectSchema } from './storesCreateWithoutCustomersInput.schema';
import { storesUncheckedCreateWithoutCustomersInputObjectSchema } from './storesUncheckedCreateWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpsertWithoutCustomersInput> = z
  .object({
    update: z.union([
      z.lazy(() => storesUpdateWithoutCustomersInputObjectSchema),
      z.lazy(() => storesUncheckedUpdateWithoutCustomersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => storesCreateWithoutCustomersInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
  })
  .strict();

export const storesUpsertWithoutCustomersInputObjectSchema = Schema;
