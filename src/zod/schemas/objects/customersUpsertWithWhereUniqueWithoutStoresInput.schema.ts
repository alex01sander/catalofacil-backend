import { z } from 'zod';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';
import { customersUpdateWithoutStoresInputObjectSchema } from './customersUpdateWithoutStoresInput.schema';
import { customersUncheckedUpdateWithoutStoresInputObjectSchema } from './customersUncheckedUpdateWithoutStoresInput.schema';
import { customersCreateWithoutStoresInputObjectSchema } from './customersCreateWithoutStoresInput.schema';
import { customersUncheckedCreateWithoutStoresInputObjectSchema } from './customersUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUpsertWithWhereUniqueWithoutStoresInput> =
  z
    .object({
      where: z.lazy(() => customersWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => customersUpdateWithoutStoresInputObjectSchema),
        z.lazy(() => customersUncheckedUpdateWithoutStoresInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => customersCreateWithoutStoresInputObjectSchema),
        z.lazy(() => customersUncheckedCreateWithoutStoresInputObjectSchema),
      ]),
    })
    .strict();

export const customersUpsertWithWhereUniqueWithoutStoresInputObjectSchema =
  Schema;
