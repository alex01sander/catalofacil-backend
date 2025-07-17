import { z } from 'zod';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';
import { customersCreateWithoutStoresInputObjectSchema } from './customersCreateWithoutStoresInput.schema';
import { customersUncheckedCreateWithoutStoresInputObjectSchema } from './customersUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersCreateOrConnectWithoutStoresInput> = z
  .object({
    where: z.lazy(() => customersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => customersCreateWithoutStoresInputObjectSchema),
      z.lazy(() => customersUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
  })
  .strict();

export const customersCreateOrConnectWithoutStoresInputObjectSchema = Schema;
