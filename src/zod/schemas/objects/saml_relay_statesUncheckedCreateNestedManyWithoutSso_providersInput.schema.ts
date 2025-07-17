import { z } from 'zod';
import { saml_relay_statesCreateWithoutSso_providersInputObjectSchema } from './saml_relay_statesCreateWithoutSso_providersInput.schema';
import { saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema } from './saml_relay_statesUncheckedCreateWithoutSso_providersInput.schema';
import { saml_relay_statesCreateOrConnectWithoutSso_providersInputObjectSchema } from './saml_relay_statesCreateOrConnectWithoutSso_providersInput.schema';
import { saml_relay_statesCreateManySso_providersInputEnvelopeObjectSchema } from './saml_relay_statesCreateManySso_providersInputEnvelope.schema';
import { saml_relay_statesWhereUniqueInputObjectSchema } from './saml_relay_statesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesUncheckedCreateNestedManyWithoutSso_providersInput> =
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
      createMany: z
        .lazy(
          () =>
            saml_relay_statesCreateManySso_providersInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const saml_relay_statesUncheckedCreateNestedManyWithoutSso_providersInputObjectSchema =
  Schema;
