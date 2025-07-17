import { z } from 'zod';
import { storesCreateWithoutSalesInputObjectSchema } from './storesCreateWithoutSalesInput.schema';
import { storesUncheckedCreateWithoutSalesInputObjectSchema } from './storesUncheckedCreateWithoutSalesInput.schema';
import { storesCreateOrConnectWithoutSalesInputObjectSchema } from './storesCreateOrConnectWithoutSalesInput.schema';
import { storesUpsertWithoutSalesInputObjectSchema } from './storesUpsertWithoutSalesInput.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesUpdateWithoutSalesInputObjectSchema } from './storesUpdateWithoutSalesInput.schema';
import { storesUncheckedUpdateWithoutSalesInputObjectSchema } from './storesUncheckedUpdateWithoutSalesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpdateOneWithoutSalesNestedInput> = z
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
    upsert: z.lazy(() => storesUpsertWithoutSalesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => storesWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => storesUpdateWithoutSalesInputObjectSchema),
        z.lazy(() => storesUncheckedUpdateWithoutSalesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const storesUpdateOneWithoutSalesNestedInputObjectSchema = Schema;
