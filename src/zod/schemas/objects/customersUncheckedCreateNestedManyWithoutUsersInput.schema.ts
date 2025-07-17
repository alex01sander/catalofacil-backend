import { z } from 'zod';
import { customersCreateWithoutUsersInputObjectSchema } from './customersCreateWithoutUsersInput.schema';
import { customersUncheckedCreateWithoutUsersInputObjectSchema } from './customersUncheckedCreateWithoutUsersInput.schema';
import { customersCreateOrConnectWithoutUsersInputObjectSchema } from './customersCreateOrConnectWithoutUsersInput.schema';
import { customersCreateManyUsersInputEnvelopeObjectSchema } from './customersCreateManyUsersInputEnvelope.schema';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUncheckedCreateNestedManyWithoutUsersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => customersCreateWithoutUsersInputObjectSchema),
          z.lazy(() => customersCreateWithoutUsersInputObjectSchema).array(),
          z.lazy(() => customersUncheckedCreateWithoutUsersInputObjectSchema),
          z
            .lazy(() => customersUncheckedCreateWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => customersCreateOrConnectWithoutUsersInputObjectSchema),
          z
            .lazy(() => customersCreateOrConnectWithoutUsersInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => customersCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => customersWhereUniqueInputObjectSchema),
          z.lazy(() => customersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const customersUncheckedCreateNestedManyWithoutUsersInputObjectSchema =
  Schema;
