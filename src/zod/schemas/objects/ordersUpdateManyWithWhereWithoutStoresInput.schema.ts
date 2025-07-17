import { z } from 'zod';
import { ordersScalarWhereInputObjectSchema } from './ordersScalarWhereInput.schema';
import { ordersUpdateManyMutationInputObjectSchema } from './ordersUpdateManyMutationInput.schema';
import { ordersUncheckedUpdateManyWithoutOrdersInputObjectSchema } from './ordersUncheckedUpdateManyWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ordersUpdateManyWithWhereWithoutStoresInput> = z
  .object({
    where: z.lazy(() => ordersScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ordersUpdateManyMutationInputObjectSchema),
      z.lazy(() => ordersUncheckedUpdateManyWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const ordersUpdateManyWithWhereWithoutStoresInputObjectSchema = Schema;
