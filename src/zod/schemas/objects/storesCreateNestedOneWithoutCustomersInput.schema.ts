import { z } from 'zod';
import { storesCreateWithoutCustomersInputObjectSchema } from './storesCreateWithoutCustomersInput.schema';
import { storesUncheckedCreateWithoutCustomersInputObjectSchema } from './storesUncheckedCreateWithoutCustomersInput.schema';
import { storesCreateOrConnectWithoutCustomersInputObjectSchema } from './storesCreateOrConnectWithoutCustomersInput.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateNestedOneWithoutCustomersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => storesCreateWithoutCustomersInputObjectSchema),
        z.lazy(() => storesUncheckedCreateWithoutCustomersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => storesCreateOrConnectWithoutCustomersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => storesWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const storesCreateNestedOneWithoutCustomersInputObjectSchema = Schema;
