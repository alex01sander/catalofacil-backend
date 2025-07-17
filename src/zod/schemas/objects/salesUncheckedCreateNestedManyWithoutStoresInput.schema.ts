import { z } from 'zod';
import { salesCreateWithoutStoresInputObjectSchema } from './salesCreateWithoutStoresInput.schema';
import { salesUncheckedCreateWithoutStoresInputObjectSchema } from './salesUncheckedCreateWithoutStoresInput.schema';
import { salesCreateOrConnectWithoutStoresInputObjectSchema } from './salesCreateOrConnectWithoutStoresInput.schema';
import { salesCreateManyStoresInputEnvelopeObjectSchema } from './salesCreateManyStoresInputEnvelope.schema';
import { salesWhereUniqueInputObjectSchema } from './salesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesUncheckedCreateNestedManyWithoutStoresInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => salesCreateWithoutStoresInputObjectSchema),
          z.lazy(() => salesCreateWithoutStoresInputObjectSchema).array(),
          z.lazy(() => salesUncheckedCreateWithoutStoresInputObjectSchema),
          z
            .lazy(() => salesUncheckedCreateWithoutStoresInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => salesCreateOrConnectWithoutStoresInputObjectSchema),
          z
            .lazy(() => salesCreateOrConnectWithoutStoresInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => salesCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => salesWhereUniqueInputObjectSchema),
          z.lazy(() => salesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const salesUncheckedCreateNestedManyWithoutStoresInputObjectSchema =
  Schema;
