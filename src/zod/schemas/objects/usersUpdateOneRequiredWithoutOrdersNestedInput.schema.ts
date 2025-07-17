import { z } from 'zod';
import { usersCreateWithoutOrdersInputObjectSchema } from './usersCreateWithoutOrdersInput.schema';
import { usersUncheckedCreateWithoutOrdersInputObjectSchema } from './usersUncheckedCreateWithoutOrdersInput.schema';
import { usersCreateOrConnectWithoutOrdersInputObjectSchema } from './usersCreateOrConnectWithoutOrdersInput.schema';
import { usersUpsertWithoutOrdersInputObjectSchema } from './usersUpsertWithoutOrdersInput.schema';
import { usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutOrdersInputObjectSchema } from './usersUpdateWithoutOrdersInput.schema';
import { usersUncheckedUpdateWithoutOrdersInputObjectSchema } from './usersUncheckedUpdateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutOrdersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => usersCreateWithoutOrdersInputObjectSchema),
          z.lazy(() => usersUncheckedCreateWithoutOrdersInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => usersCreateOrConnectWithoutOrdersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => usersUpsertWithoutOrdersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => usersUpdateWithoutOrdersInputObjectSchema),
          z.lazy(() => usersUncheckedUpdateWithoutOrdersInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const usersUpdateOneRequiredWithoutOrdersNestedInputObjectSchema =
  Schema;
