import { z } from 'zod';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';
import { customersCreateWithoutOrdersInputObjectSchema } from './customersCreateWithoutOrdersInput.schema';
import { customersUncheckedCreateWithoutOrdersInputObjectSchema } from './customersUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersCreateOrConnectWithoutOrdersInput> = z
  .object({
    where: z.lazy(() => customersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => customersCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => customersUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const customersCreateOrConnectWithoutOrdersInputObjectSchema = Schema;
