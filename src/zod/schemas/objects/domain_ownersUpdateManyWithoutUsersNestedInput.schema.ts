import { z } from 'zod';
import { domain_ownersCreateWithoutUsersInputObjectSchema } from './domain_ownersCreateWithoutUsersInput.schema';
import { domain_ownersUncheckedCreateWithoutUsersInputObjectSchema } from './domain_ownersUncheckedCreateWithoutUsersInput.schema';
import { domain_ownersCreateOrConnectWithoutUsersInputObjectSchema } from './domain_ownersCreateOrConnectWithoutUsersInput.schema';
import { domain_ownersUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './domain_ownersUpsertWithWhereUniqueWithoutUsersInput.schema';
import { domain_ownersCreateManyUsersInputEnvelopeObjectSchema } from './domain_ownersCreateManyUsersInputEnvelope.schema';
import { domain_ownersWhereUniqueInputObjectSchema } from './domain_ownersWhereUniqueInput.schema';
import { domain_ownersUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './domain_ownersUpdateWithWhereUniqueWithoutUsersInput.schema';
import { domain_ownersUpdateManyWithWhereWithoutUsersInputObjectSchema } from './domain_ownersUpdateManyWithWhereWithoutUsersInput.schema';
import { domain_ownersScalarWhereInputObjectSchema } from './domain_ownersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.domain_ownersUpdateManyWithoutUsersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => domain_ownersCreateWithoutUsersInputObjectSchema),
          z
            .lazy(() => domain_ownersCreateWithoutUsersInputObjectSchema)
            .array(),
          z.lazy(
            () => domain_ownersUncheckedCreateWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => domain_ownersUncheckedCreateWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => domain_ownersCreateOrConnectWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () => domain_ownersCreateOrConnectWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              domain_ownersUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                domain_ownersUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => domain_ownersCreateManyUsersInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => domain_ownersWhereUniqueInputObjectSchema),
          z.lazy(() => domain_ownersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => domain_ownersWhereUniqueInputObjectSchema),
          z.lazy(() => domain_ownersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => domain_ownersWhereUniqueInputObjectSchema),
          z.lazy(() => domain_ownersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => domain_ownersWhereUniqueInputObjectSchema),
          z.lazy(() => domain_ownersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              domain_ownersUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                domain_ownersUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => domain_ownersUpdateManyWithWhereWithoutUsersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                domain_ownersUpdateManyWithWhereWithoutUsersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => domain_ownersScalarWhereInputObjectSchema),
          z.lazy(() => domain_ownersScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const domain_ownersUpdateManyWithoutUsersNestedInputObjectSchema =
  Schema;
