import { z } from 'zod';
import { customersCreateWithoutStoresInputObjectSchema } from './customersCreateWithoutStoresInput.schema';
import { customersUncheckedCreateWithoutStoresInputObjectSchema } from './customersUncheckedCreateWithoutStoresInput.schema';
import { customersCreateOrConnectWithoutStoresInputObjectSchema } from './customersCreateOrConnectWithoutStoresInput.schema';
import { customersCreateManyStoresInputEnvelopeObjectSchema } from './customersCreateManyStoresInputEnvelope.schema';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUncheckedCreateNestedManyWithoutStoresInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => customersCreateWithoutStoresInputObjectSchema),
          z.lazy(() => customersCreateWithoutStoresInputObjectSchema).array(),
          z.lazy(() => customersUncheckedCreateWithoutStoresInputObjectSchema),
          z
            .lazy(() => customersUncheckedCreateWithoutStoresInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => customersCreateOrConnectWithoutStoresInputObjectSchema),
          z
            .lazy(() => customersCreateOrConnectWithoutStoresInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => customersCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => customersWhereUniqueInputObjectSchema),
          z.lazy(() => customersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const customersUncheckedCreateNestedManyWithoutStoresInputObjectSchema =
  Schema;
