import { z } from 'zod';
import { storesCreateWithoutCustomersInputObjectSchema } from './storesCreateWithoutCustomersInput.schema';
import { storesUncheckedCreateWithoutCustomersInputObjectSchema } from './storesUncheckedCreateWithoutCustomersInput.schema';
import { storesCreateOrConnectWithoutCustomersInputObjectSchema } from './storesCreateOrConnectWithoutCustomersInput.schema';
import { storesUpsertWithoutCustomersInputObjectSchema } from './storesUpsertWithoutCustomersInput.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesUpdateWithoutCustomersInputObjectSchema } from './storesUpdateWithoutCustomersInput.schema';
import { storesUncheckedUpdateWithoutCustomersInputObjectSchema } from './storesUncheckedUpdateWithoutCustomersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpdateOneWithoutCustomersNestedInput> = z
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
    upsert: z
      .lazy(() => storesUpsertWithoutCustomersInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => storesWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => storesUpdateWithoutCustomersInputObjectSchema),
        z.lazy(() => storesUncheckedUpdateWithoutCustomersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const storesUpdateOneWithoutCustomersNestedInputObjectSchema = Schema;
