import { z } from 'zod';
import { customersCreateWithoutOrdersInputObjectSchema } from './customersCreateWithoutOrdersInput.schema';
import { customersUncheckedCreateWithoutOrdersInputObjectSchema } from './customersUncheckedCreateWithoutOrdersInput.schema';
import { customersCreateOrConnectWithoutOrdersInputObjectSchema } from './customersCreateOrConnectWithoutOrdersInput.schema';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersCreateNestedOneWithoutOrdersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => customersCreateWithoutOrdersInputObjectSchema),
        z.lazy(() => customersUncheckedCreateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => customersCreateOrConnectWithoutOrdersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => customersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const customersCreateNestedOneWithoutOrdersInputObjectSchema = Schema;
