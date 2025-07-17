import { z } from 'zod';
import { sso_providersCreateWithoutSso_domainsInputObjectSchema } from './sso_providersCreateWithoutSso_domainsInput.schema';
import { sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema } from './sso_providersUncheckedCreateWithoutSso_domainsInput.schema';
import { sso_providersCreateOrConnectWithoutSso_domainsInputObjectSchema } from './sso_providersCreateOrConnectWithoutSso_domainsInput.schema';
import { sso_providersWhereUniqueInputObjectSchema } from './sso_providersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersCreateNestedOneWithoutSso_domainsInput> =
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
      connect: z
        .lazy(() => sso_providersWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const sso_providersCreateNestedOneWithoutSso_domainsInputObjectSchema =
  Schema;
