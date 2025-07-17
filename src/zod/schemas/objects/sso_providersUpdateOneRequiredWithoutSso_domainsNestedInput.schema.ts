import { z } from 'zod';
import { sso_providersCreateWithoutSso_domainsInputObjectSchema } from './sso_providersCreateWithoutSso_domainsInput.schema';
import { sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema } from './sso_providersUncheckedCreateWithoutSso_domainsInput.schema';
import { sso_providersCreateOrConnectWithoutSso_domainsInputObjectSchema } from './sso_providersCreateOrConnectWithoutSso_domainsInput.schema';
import { sso_providersUpsertWithoutSso_domainsInputObjectSchema } from './sso_providersUpsertWithoutSso_domainsInput.schema';
import { sso_providersWhereUniqueInputObjectSchema } from './sso_providersWhereUniqueInput.schema';
import { sso_providersUpdateWithoutSso_domainsInputObjectSchema } from './sso_providersUpdateWithoutSso_domainsInput.schema';
import { sso_providersUncheckedUpdateWithoutSso_domainsInputObjectSchema } from './sso_providersUncheckedUpdateWithoutSso_domainsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersUpdateOneRequiredWithoutSso_domainsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => sso_providersCreateWithoutSso_domainsInputObjectSchema),
          z.lazy(
            () =>
              sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => sso_providersCreateOrConnectWithoutSso_domainsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => sso_providersUpsertWithoutSso_domainsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => sso_providersWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => sso_providersUpdateWithoutSso_domainsInputObjectSchema),
          z.lazy(
            () =>
              sso_providersUncheckedUpdateWithoutSso_domainsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const sso_providersUpdateOneRequiredWithoutSso_domainsNestedInputObjectSchema =
  Schema;
