import { z } from 'zod';
import { customersCreateWithoutUsersInputObjectSchema } from './customersCreateWithoutUsersInput.schema';
import { customersUncheckedCreateWithoutUsersInputObjectSchema } from './customersUncheckedCreateWithoutUsersInput.schema';
import { customersCreateOrConnectWithoutUsersInputObjectSchema } from './customersCreateOrConnectWithoutUsersInput.schema';
import { customersUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './customersUpsertWithWhereUniqueWithoutUsersInput.schema';
import { customersCreateManyUsersInputEnvelopeObjectSchema } from './customersCreateManyUsersInputEnvelope.schema';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';
import { customersUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './customersUpdateWithWhereUniqueWithoutUsersInput.schema';
import { customersUpdateManyWithWhereWithoutUsersInputObjectSchema } from './customersUpdateManyWithWhereWithoutUsersInput.schema';
import { customersScalarWhereInputObjectSchema } from './customersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUncheckedUpdateManyWithoutUsersNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => customersUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => customersUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => customersCreateManyUsersInputEnvelopeObjectSchema)
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
            () => customersUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => customersUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => customersUpdateManyWithWhereWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => customersUpdateManyWithWhereWithoutUsersInputObjectSchema,
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

export const customersUncheckedUpdateManyWithoutUsersNestedInputObjectSchema =
  Schema;
