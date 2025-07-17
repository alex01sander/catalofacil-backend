import { z } from 'zod';
import { saml_relay_statesCreateWithoutSso_providersInputObjectSchema } from './saml_relay_statesCreateWithoutSso_providersInput.schema';
import { saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema } from './saml_relay_statesUncheckedCreateWithoutSso_providersInput.schema';
import { saml_relay_statesCreateOrConnectWithoutSso_providersInputObjectSchema } from './saml_relay_statesCreateOrConnectWithoutSso_providersInput.schema';
import { saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema } from './saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput.schema';
import { saml_relay_statesCreateManySso_providersInputEnvelopeObjectSchema } from './saml_relay_statesCreateManySso_providersInputEnvelope.schema';
import { saml_relay_statesWhereUniqueInputObjectSchema } from './saml_relay_statesWhereUniqueInput.schema';
import { saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema } from './saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput.schema';
import { saml_relay_statesUpdateManyWithWhereWithoutSso_providersInputObjectSchema } from './saml_relay_statesUpdateManyWithWhereWithoutSso_providersInput.schema';
import { saml_relay_statesScalarWhereInputObjectSchema } from './saml_relay_statesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesUpdateManyWithoutSso_providersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => saml_relay_statesCreateWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesCreateWithoutSso_providersInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              saml_relay_statesCreateOrConnectWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesCreateOrConnectWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            saml_relay_statesCreateManySso_providersInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              saml_relay_statesUpdateManyWithWhereWithoutSso_providersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesUpdateManyWithWhereWithoutSso_providersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => saml_relay_statesScalarWhereInputObjectSchema),
          z.lazy(() => saml_relay_statesScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const saml_relay_statesUpdateManyWithoutSso_providersNestedInputObjectSchema =
  Schema;
