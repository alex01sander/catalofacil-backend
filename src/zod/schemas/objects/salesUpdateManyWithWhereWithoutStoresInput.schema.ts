import { z } from 'zod';
import { salesScalarWhereInputObjectSchema } from './salesScalarWhereInput.schema';
import { salesUpdateManyMutationInputObjectSchema } from './salesUpdateManyMutationInput.schema';
import { salesUncheckedUpdateManyWithoutSalesInputObjectSchema } from './salesUncheckedUpdateManyWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesUpdateManyWithWhereWithoutStoresInput> = z
  .object({
    where: z.lazy(() => salesScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => salesUpdateManyMutationInputObjectSchema),
      z.lazy(() => salesUncheckedUpdateManyWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const salesUpdateManyWithWhereWithoutStoresInputObjectSchema = Schema;
