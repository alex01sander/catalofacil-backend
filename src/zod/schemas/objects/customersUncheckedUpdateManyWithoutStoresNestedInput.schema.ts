import { z } from 'zod';
import { customersCreateWithoutStoresInputObjectSchema } from './customersCreateWithoutStoresInput.schema';
import { customersUncheckedCreateWithoutStoresInputObjectSchema } from './customersUncheckedCreateWithoutStoresInput.schema';
import { customersCreateOrConnectWithoutStoresInputObjectSchema } from './customersCreateOrConnectWithoutStoresInput.schema';
import { customersUpsertWithWhereUniqueWithoutStoresInputObjectSchema } from './customersUpsertWithWhereUniqueWithoutStoresInput.schema';
import { customersCreateManyStoresInputEnvelopeObjectSchema } from './customersCreateManyStoresInputEnvelope.schema';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';
import { customersUpdateWithWhereUniqueWithoutStoresInputObjectSchema } from './customersUpdateWithWhereUniqueWithoutStoresInput.schema';
import { customersUpdateManyWithWhereWithoutStoresInputObjectSchema } from './customersUpdateManyWithWhereWithoutStoresInput.schema';
import { customersScalarWhereInputObjectSchema } from './customersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUncheckedUpdateManyWithoutStoresNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => customersUpsertWithWhereUniqueWithoutStoresInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                customersUpsertWithWhereUniqueWithoutStoresInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => customersCreateManyStoresInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => customersWhereUniqueInputObjectSchema),
          z.lazy(() => customersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => customersWhereUniqueInputObjectSchema),
          z.lazy(() => customersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => customersWhereUniqueInputObjectSchema),
          z.lazy(() => customersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => customersWhereUniqueInputObjectSchema),
          z.lazy(() => customersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => customersUpdateWithWhereUniqueWithoutStoresInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                customersUpdateWithWhereUniqueWithoutStoresInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => customersUpdateManyWithWhereWithoutStoresInputObjectSchema,
          ),
          z
            .lazy(
              () => customersUpdateManyWithWhereWithoutStoresInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => customersScalarWhereInputObjectSchema),
          z.lazy(() => customersScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const customersUncheckedUpdateManyWithoutStoresNestedInputObjectSchema =
  Schema;
