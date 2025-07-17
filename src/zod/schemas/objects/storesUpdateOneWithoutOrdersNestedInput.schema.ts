import { z } from 'zod';
import { storesCreateWithoutOrdersInputObjectSchema } from './storesCreateWithoutOrdersInput.schema';
import { storesUncheckedCreateWithoutOrdersInputObjectSchema } from './storesUncheckedCreateWithoutOrdersInput.schema';
import { storesCreateOrConnectWithoutOrdersInputObjectSchema } from './storesCreateOrConnectWithoutOrdersInput.schema';
import { storesUpsertWithoutOrdersInputObjectSchema } from './storesUpsertWithoutOrdersInput.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesUpdateWithoutOrdersInputObjectSchema } from './storesUpdateWithoutOrdersInput.schema';
import { storesUncheckedUpdateWithoutOrdersInputObjectSchema } from './storesUncheckedUpdateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesUpdateOneWithoutOrdersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => storesCreateWithoutOrdersInputObjectSchema),
        z.lazy(() => storesUncheckedCreateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => storesCreateOrConnectWithoutOrdersInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => storesUpsertWithoutOrdersInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => storesWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => storesUpdateWithoutOrdersInputObjectSchema),
        z.lazy(() => storesUncheckedUpdateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const storesUpdateOneWithoutOrdersNestedInputObjectSchema = Schema;
