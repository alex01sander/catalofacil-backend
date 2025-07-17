import { z } from 'zod';
import { customersScalarWhereInputObjectSchema } from './customersScalarWhereInput.schema';
import { customersUpdateManyMutationInputObjectSchema } from './customersUpdateManyMutationInput.schema';
import { customersUncheckedUpdateManyWithoutCustomersInputObjectSchema } from './customersUncheckedUpdateManyWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUpdateManyWithWhereWithoutStoresInput> =
  z
    .object({
      where: z.lazy(() => customersScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => customersUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => customersUncheckedUpdateManyWithoutCustomersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const customersUpdateManyWithWhereWithoutStoresInputObjectSchema =
  Schema;
