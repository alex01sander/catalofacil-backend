import { z } from 'zod';
import { storesWhereUniqueInputObjectSchema } from './storesWhereUniqueInput.schema';
import { storesCreateWithoutOrdersInputObjectSchema } from './storesCreateWithoutOrdersInput.schema';
import { storesUncheckedCreateWithoutOrdersInputObjectSchema } from './storesUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.storesCreateOrConnectWithoutOrdersInput> = z
  .object({
    where: z.lazy(() => storesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => storesCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => storesUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const storesCreateOrConnectWithoutOrdersInputObjectSchema = Schema;
