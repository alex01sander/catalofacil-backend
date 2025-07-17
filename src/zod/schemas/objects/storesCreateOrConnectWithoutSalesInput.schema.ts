import { z } from 'zod';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesCreateWithoutSalesInputObjectSchema } from './storesCreateWithoutSalesInput.schema';
import { storesUncheckedCreateWithoutSalesInputObjectSchema } from './storesUncheckedCreateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateOrConnectWithoutSalesInput> = z
  .object({
    where: z.lazy(() => storesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => storesCreateWithoutSalesInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
  })
  .strict();

export const storesCreateOrConnectWithoutSalesInputObjectSchema = Schema;
