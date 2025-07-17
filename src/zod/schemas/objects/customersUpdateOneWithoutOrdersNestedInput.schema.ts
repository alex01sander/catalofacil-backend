import { z } from 'zod';
import { customersCreateWithoutOrdersInputObjectSchema } from './customersCreateWithoutOrdersInput.schema';
import { customersUncheckedCreateWithoutOrdersInputObjectSchema } from './customersUncheckedCreateWithoutOrdersInput.schema';
import { customersCreateOrConnectWithoutOrdersInputObjectSchema } from './customersCreateOrConnectWithoutOrdersInput.schema';
import { customersUpsertWithoutOrdersInputObjectSchema } from './customersUpsertWithoutOrdersInput.schema';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';
import { customersUpdateWithoutOrdersInputObjectSchema } from './customersUpdateWithoutOrdersInput.schema';
import { customersUncheckedUpdateWithoutOrdersInputObjectSchema } from './customersUncheckedUpdateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUpdateOneWithoutOrdersNestedInput> = z
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
    upsert: z
      .lazy(() => customersUpsertWithoutOrdersInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => customersWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => customersUpdateWithoutOrdersInputObjectSchema),
        z.lazy(() => customersUncheckedUpdateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const customersUpdateOneWithoutOrdersNestedInputObjectSchema = Schema;
