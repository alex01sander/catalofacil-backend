import { z } from 'zod';
import { storesUpdateWithoutOrdersInputObjectSchema } from './storesUpdateWithoutOrdersInput.schema';
import { storesUncheckedUpdateWithoutOrdersInputObjectSchema } from './storesUncheckedUpdateWithoutOrdersInput.schema';
import { storesCreateWithoutOrdersInputObjectSchema } from './storesCreateWithoutOrdersInput.schema';
import { storesUncheckedCreateWithoutOrdersInputObjectSchema } from './storesUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpsertWithoutOrdersInput> = z
  .object({
    update: z.union([
      z.lazy(() => storesUpdateWithoutOrdersInputObjectSchema),
      z.lazy(() => storesUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => storesCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const storesUpsertWithoutOrdersInputObjectSchema = Schema;
