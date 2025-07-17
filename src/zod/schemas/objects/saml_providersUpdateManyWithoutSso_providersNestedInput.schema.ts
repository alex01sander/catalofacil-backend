import { z } from 'zod';
import { saml_providersCreateWithoutSso_providersInputObjectSchema } from './saml_providersCreateWithoutSso_providersInput.schema';
import { saml_providersUncheckedCreateWithoutSso_providersInputObjectSchema } from './saml_providersUncheckedCreateWithoutSso_providersInput.schema';
import { saml_providersCreateOrConnectWithoutSso_providersInputObjectSchema } from './saml_providersCreateOrConnectWithoutSso_providersInput.schema';
import { saml_providersUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema } from './saml_providersUpsertWithWhereUniqueWithoutSso_providersInput.schema';
import { saml_providersCreateManySso_providersInputEnvelopeObjectSchema } from './saml_providersCreateManySso_providersInputEnvelope.schema';
import { saml_providersWhereUniqueInputObjectSchema } from './saml_providersWhereUniqueInput.schema';
import { saml_providersUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema } from './saml_providersUpdateWithWhereUniqueWithoutSso_providersInput.schema';
import { saml_providersUpdateManyWithWhereWithoutSso_providersInputObjectSchema } from './saml_providersUpdateManyWithWhereWithoutSso_providersInput.schema';
import { saml_providersScalarWhereInputObjectSchema } from './saml_providersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersUpdateManyWithoutSso_providersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => saml_providersCreateWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () => saml_providersCreateWithoutSso_providersInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              saml_providersUncheckedCreateWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_providersUncheckedCreateWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              saml_providersCreateOrConnectWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_providersCreateOrConnectWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              saml_providersUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_providersUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => saml_providersCreateManySso_providersInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => saml_providersWhereUniqueInputObjectSchema),
          z.lazy(() => saml_providersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => saml_providersWhereUniqueInputObjectSchema),
          z.lazy(() => saml_providersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => saml_providersWhereUniqueInputObjectSchema),
          z.lazy(() => saml_providersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => saml_providersWhereUniqueInputObjectSchema),
          z.lazy(() => saml_providersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              saml_providersUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_providersUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              saml_providersUpdateManyWithWhereWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_providersUpdateManyWithWhereWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => saml_providersScalarWhereInputObjectSchema),
          z.lazy(() => saml_providersScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const saml_providersUpdateManyWithoutSso_providersNestedInputObjectSchema =
  Schema;
