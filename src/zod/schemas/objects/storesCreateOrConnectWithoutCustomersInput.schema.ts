import { z } from 'zod';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesCreateWithoutCustomersInputObjectSchema } from './storesCreateWithoutCustomersInput.schema';
import { storesUncheckedCreateWithoutCustomersInputObjectSchema } from './storesUncheckedCreateWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateOrConnectWithoutCustomersInput> = z
  .object({
    where: z.lazy(() => storesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => storesCreateWithoutCustomersInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
  })
  .strict();

export const storesCreateOrConnectWithoutCustomersInputObjectSchema = Schema;
