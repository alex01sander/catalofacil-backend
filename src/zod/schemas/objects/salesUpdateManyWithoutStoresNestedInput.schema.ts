import { z } from 'zod';
import { salesCreateWithoutStoresInputObjectSchema } from './salesCreateWithoutStoresInput.schema';
import { salesUncheckedCreateWithoutStoresInputObjectSchema } from './salesUncheckedCreateWithoutStoresInput.schema';
import { salesCreateOrConnectWithoutStoresInputObjectSchema } from './salesCreateOrConnectWithoutStoresInput.schema';
import { salesUpsertWithWhereUniqueWithoutStoresInputObjectSchema } from './salesUpsertWithWhereUniqueWithoutStoresInput.schema';
import { salesCreateManyStoresInputEnvelopeObjectSchema } from './salesCreateManyStoresInputEnvelope.schema';
import { salesWhereUniqueInputObjectSchema } from './salesWhereUniqueInput.schema';
import { salesUpdateWithWhereUniqueWithoutStoresInputObjectSchema } from './salesUpdateWithWhereUniqueWithoutStoresInput.schema';
import { salesUpdateManyWithWhereWithoutStoresInputObjectSchema } from './salesUpdateManyWithWhereWithoutStoresInput.schema';
import { salesScalarWhereInputObjectSchema } from './salesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.salesUpdateManyWithoutStoresNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => salesUpsertWithWhereUniqueWithoutStoresInputObjectSchema),
        z
          .lazy(() => salesUpsertWithWhereUniqueWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => salesCreateManyStoresInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => salesWhereUniqueInputObjectSchema),
        z.lazy(() => salesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => salesWhereUniqueInputObjectSchema),
        z.lazy(() => salesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => salesWhereUniqueInputObjectSchema),
        z.lazy(() => salesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => salesWhereUniqueInputObjectSchema),
        z.lazy(() => salesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => salesUpdateWithWhereUniqueWithoutStoresInputObjectSchema),
        z
          .lazy(() => salesUpdateWithWhereUniqueWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => salesUpdateManyWithWhereWithoutStoresInputObjectSchema),
        z
          .lazy(() => salesUpdateManyWithWhereWithoutStoresInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => salesScalarWhereInputObjectSchema),
        z.lazy(() => salesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const salesUpdateManyWithoutStoresNestedInputObjectSchema = Schema;
