import { z } from 'zod';
import { saml_providersCreateWithoutSso_providersInputObjectSchema } from './saml_providersCreateWithoutSso_providersInput.schema';
import { saml_providersUncheckedCreateWithoutSso_providersInputObjectSchema } from './saml_providersUncheckedCreateWithoutSso_providersInput.schema';
import { saml_providersCreateOrConnectWithoutSso_providersInputObjectSchema } from './saml_providersCreateOrConnectWithoutSso_providersInput.schema';
import { saml_providersCreateManySso_providersInputEnvelopeObjectSchema } from './saml_providersCreateManySso_providersInputEnvelope.schema';
import { saml_providersWhereUniqueInputObjectSchema } from './saml_providersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersCreateNestedManyWithoutSso_providersInput> =
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
      createMany: z
        .lazy(
          () => saml_providersCreateManySso_providersInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => saml_providersWhereUniqueInputObjectSchema),
          z.lazy(() => saml_providersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const saml_providersCreateNestedManyWithoutSso_providersInputObjectSchema =
  Schema;
