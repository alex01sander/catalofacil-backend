import { z } from 'zod';
import { storesCreateWithoutSalesInputObjectSchema } from './storesCreateWithoutSalesInput.schema';
import { storesUncheckedCreateWithoutSalesInputObjectSchema } from './storesUncheckedCreateWithoutSalesInput.schema';
import { storesCreateOrConnectWithoutSalesInputObjectSchema } from './storesCreateOrConnectWithoutSalesInput.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateNestedOneWithoutSalesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => storesCreateWithoutSalesInputObjectSchema),
        z.lazy(() => storesUncheckedCreateWithoutSalesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => storesCreateOrConnectWithoutSalesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => storesWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const storesCreateNestedOneWithoutSalesInputObjectSchema = Schema;
