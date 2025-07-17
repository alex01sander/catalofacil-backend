import { z } from 'zod';
import { customersUpdateWithoutOrdersInputObjectSchema } from './customersUpdateWithoutOrdersInput.schema';
import { customersUncheckedUpdateWithoutOrdersInputObjectSchema } from './customersUncheckedUpdateWithoutOrdersInput.schema';
import { customersCreateWithoutOrdersInputObjectSchema } from './customersCreateWithoutOrdersInput.schema';
import { customersUncheckedCreateWithoutOrdersInputObjectSchema } from './customersUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUpsertWithoutOrdersInput> = z
  .object({
    update: z.union([
      z.lazy(() => customersUpdateWithoutOrdersInputObjectSchema),
      z.lazy(() => customersUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => customersCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => customersUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const customersUpsertWithoutOrdersInputObjectSchema = Schema;
