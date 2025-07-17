import { z } from 'zod';
import { sso_domainsCreateWithoutSso_providersInputObjectSchema } from './sso_domainsCreateWithoutSso_providersInput.schema';
import { sso_domainsUncheckedCreateWithoutSso_providersInputObjectSchema } from './sso_domainsUncheckedCreateWithoutSso_providersInput.schema';
import { sso_domainsCreateOrConnectWithoutSso_providersInputObjectSchema } from './sso_domainsCreateOrConnectWithoutSso_providersInput.schema';
import { sso_domainsUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema } from './sso_domainsUpsertWithWhereUniqueWithoutSso_providersInput.schema';
import { sso_domainsCreateManySso_providersInputEnvelopeObjectSchema } from './sso_domainsCreateManySso_providersInputEnvelope.schema';
import { sso_domainsWhereUniqueInputObjectSchema } from './sso_domainsWhereUniqueInput.schema';
import { sso_domainsUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema } from './sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput.schema';
import { sso_domainsUpdateManyWithWhereWithoutSso_providersInputObjectSchema } from './sso_domainsUpdateManyWithWhereWithoutSso_providersInput.schema';
import { sso_domainsScalarWhereInputObjectSchema } from './sso_domainsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsUncheckedUpdateManyWithoutSso_providersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => sso_domainsCreateWithoutSso_providersInputObjectSchema),
          z
            .lazy(() => sso_domainsCreateWithoutSso_providersInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              sso_domainsUncheckedCreateWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                sso_domainsUncheckedCreateWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              sso_domainsCreateOrConnectWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                sso_domainsCreateOrConnectWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              sso_domainsUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                sso_domainsUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => sso_domainsCreateManySso_providersInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => sso_domainsWhereUniqueInputObjectSchema),
          z.lazy(() => sso_domainsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => sso_domainsWhereUniqueInputObjectSchema),
          z.lazy(() => sso_domainsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => sso_domainsWhereUniqueInputObjectSchema),
          z.lazy(() => sso_domainsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => sso_domainsWhereUniqueInputObjectSchema),
          z.lazy(() => sso_domainsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              sso_domainsUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                sso_domainsUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              sso_domainsUpdateManyWithWhereWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                sso_domainsUpdateManyWithWhereWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => sso_domainsScalarWhereInputObjectSchema),
          z.lazy(() => sso_domainsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const sso_domainsUncheckedUpdateManyWithoutSso_providersNestedInputObjectSchema =
  Schema;
