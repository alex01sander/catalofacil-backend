import { z } from 'zod';
import { storesCreateWithoutProductsInputObjectSchema } from './storesCreateWithoutProductsInput.schema';
import { storesUncheckedCreateWithoutProductsInputObjectSchema } from './storesUncheckedCreateWithoutProductsInput.schema';
import { storesCreateOrConnectWithoutProductsInputObjectSchema } from './storesCreateOrConnectWithoutProductsInput.schema';
import { storesUpsertWithoutProductsInputObjectSchema } from './storesUpsertWithoutProductsInput.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesUpdateWithoutProductsInputObjectSchema } from './storesUpdateWithoutProductsInput.schema';
import { storesUncheckedUpdateWithoutProductsInputObjectSchema } from './storesUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpdateOneWithoutProductsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => storesCreateWithoutProductsInputObjectSchema),
        z.lazy(() => storesUncheckedCreateWithoutProductsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => storesCreateOrConnectWithoutProductsInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => storesUpsertWithoutProductsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => storesWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => storesUpdateWithoutProductsInputObjectSchema),
        z.lazy(() => storesUncheckedUpdateWithoutProductsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const storesUpdateOneWithoutProductsNestedInputObjectSchema = Schema;
