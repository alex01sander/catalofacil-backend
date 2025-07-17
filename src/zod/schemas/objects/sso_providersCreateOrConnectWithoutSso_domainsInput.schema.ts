import { z } from 'zod';
import { sso_providersWhereUniqueInputObjectSchema } from './sso_providersWhereUniqueInput.schema';
import { sso_providersCreateWithoutSso_domainsInputObjectSchema } from './sso_providersCreateWithoutSso_domainsInput.schema';
import { sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema } from './sso_providersUncheckedCreateWithoutSso_domainsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersCreateOrConnectWithoutSso_domainsInput> =
  z
    .object({
      where: z.lazy(() => sso_providersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => sso_providersCreateWithoutSso_domainsInputObjectSchema),
        z.lazy(
          () => sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const sso_providersCreateOrConnectWithoutSso_domainsInputObjectSchema =
  Schema;
