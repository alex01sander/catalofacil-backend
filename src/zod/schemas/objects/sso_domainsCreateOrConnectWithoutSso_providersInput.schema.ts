import { z } from 'zod';
import { sso_domainsWhereUniqueInputObjectSchema } from './sso_domainsWhereUniqueInput.schema';
import { sso_domainsCreateWithoutSso_providersInputObjectSchema } from './sso_domainsCreateWithoutSso_providersInput.schema';
import { sso_domainsUncheckedCreateWithoutSso_providersInputObjectSchema } from './sso_domainsUncheckedCreateWithoutSso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsCreateOrConnectWithoutSso_providersInput> =
  z
    .object({
      where: z.lazy(() => sso_domainsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => sso_domainsCreateWithoutSso_providersInputObjectSchema),
        z.lazy(
          () => sso_domainsUncheckedCreateWithoutSso_providersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const sso_domainsCreateOrConnectWithoutSso_providersInputObjectSchema =
  Schema;
