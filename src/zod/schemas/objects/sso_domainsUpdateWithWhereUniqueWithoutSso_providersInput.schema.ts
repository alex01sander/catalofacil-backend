import { z } from 'zod';
import { sso_domainsWhereUniqueInputObjectSchema } from './sso_domainsWhereUniqueInput.schema';
import { sso_domainsUpdateWithoutSso_providersInputObjectSchema } from './sso_domainsUpdateWithoutSso_providersInput.schema';
import { sso_domainsUncheckedUpdateWithoutSso_providersInputObjectSchema } from './sso_domainsUncheckedUpdateWithoutSso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsUpdateWithWhereUniqueWithoutSso_providersInput> =
  z
    .object({
      where: z.lazy(() => sso_domainsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => sso_domainsUpdateWithoutSso_providersInputObjectSchema),
        z.lazy(
          () => sso_domainsUncheckedUpdateWithoutSso_providersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const sso_domainsUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema =
  Schema;
