import { z } from 'zod';
import { storesCreateWithoutOrdersInputObjectSchema } from './storesCreateWithoutOrdersInput.schema';
import { storesUncheckedCreateWithoutOrdersInputObjectSchema } from './storesUncheckedCreateWithoutOrdersInput.schema';
import { storesCreateOrConnectWithoutOrdersInputObjectSchema } from './storesCreateOrConnectWithoutOrdersInput.schema';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateNestedOneWithoutOrdersInput> = z
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
    connect: z.lazy(() => storesWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const storesCreateNestedOneWithoutOrdersInputObjectSchema = Schema;
