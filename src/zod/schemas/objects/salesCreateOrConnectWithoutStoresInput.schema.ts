import { z } from 'zod';
import { salesWhereUniqueInputObjectSchema } from './salesWhereUniqueInput.schema';
import { salesCreateWithoutStoresInputObjectSchema } from './salesCreateWithoutStoresInput.schema';
import { salesUncheckedCreateWithoutStoresInputObjectSchema } from './salesUncheckedCreateWithoutStoresInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesCreateOrConnectWithoutStoresInput> = z
  .object({
    where: z.lazy(() => salesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => salesCreateWithoutStoresInputObjectSchema),
      z.lazy(() => salesUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
  })
  .strict();

export const salesCreateOrConnectWithoutStoresInputObjectSchema = Schema;
