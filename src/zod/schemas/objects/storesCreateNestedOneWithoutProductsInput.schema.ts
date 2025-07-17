import { z } from 'zod';
import { storesCreateWithoutProductsInputObjectSchema } from './storesCreateWithoutProductsInput.schema';
import { storesUncheckedCreateWithoutProductsInputObjectSchema } from './storesUncheckedCreateWithoutProductsInput.schema';
import { storesCreateOrConnectWithoutProductsInputObjectSchema } from './storesCreateOrConnectWithoutProductsInput.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateNestedOneWithoutProductsInput> = z
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
    connect: z.lazy(() => storesWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const storesCreateNestedOneWithoutProductsInputObjectSchema = Schema;
