import { z } from 'zod';
import { sso_domainsCreateWithoutSso_providersInputObjectSchema } from './sso_domainsCreateWithoutSso_providersInput.schema';
import { sso_domainsUncheckedCreateWithoutSso_providersInputObjectSchema } from './sso_domainsUncheckedCreateWithoutSso_providersInput.schema';
import { sso_domainsCreateOrConnectWithoutSso_providersInputObjectSchema } from './sso_domainsCreateOrConnectWithoutSso_providersInput.schema';
import { sso_domainsCreateManySso_providersInputEnvelopeObjectSchema } from './sso_domainsCreateManySso_providersInputEnvelope.schema';
import { sso_domainsWhereUniqueInputObjectSchema } from './sso_domainsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsCreateNestedManyWithoutSso_providersInput> =
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
      createMany: z
        .lazy(() => sso_domainsCreateManySso_providersInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => sso_domainsWhereUniqueInputObjectSchema),
          z.lazy(() => sso_domainsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const sso_domainsCreateNestedManyWithoutSso_providersInputObjectSchema =
  Schema;
