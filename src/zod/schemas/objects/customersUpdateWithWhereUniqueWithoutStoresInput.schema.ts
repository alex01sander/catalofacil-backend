import { z } from 'zod';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';
import { customersUpdateWithoutStoresInputObjectSchema } from './customersUpdateWithoutStoresInput.schema';
import { customersUncheckedUpdateWithoutStoresInputObjectSchema } from './customersUncheckedUpdateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUpdateWithWhereUniqueWithoutStoresInput> =
  z
    .object({
      where: z.lazy(() => customersWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => customersUpdateWithoutStoresInputObjectSchema),
        z.lazy(() => customersUncheckedUpdateWithoutStoresInputObjectSchema),
      ]),
    })
    .strict();

export const customersUpdateWithWhereUniqueWithoutStoresInputObjectSchema =
  Schema;
