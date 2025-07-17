import { z } from 'zod';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesCreateWithoutProductsInputObjectSchema } from './storesCreateWithoutProductsInput.schema';
import { storesUncheckedCreateWithoutProductsInputObjectSchema } from './storesUncheckedCreateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateOrConnectWithoutProductsInput> = z
  .object({
    where: z.lazy(() => storesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => storesCreateWithoutProductsInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
  })
  .strict();

export const storesCreateOrConnectWithoutProductsInputObjectSchema = Schema;
