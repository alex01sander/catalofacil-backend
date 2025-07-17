import { z } from 'zod';
import { sso_providersUpdateWithoutSso_domainsInputObjectSchema } from './sso_providersUpdateWithoutSso_domainsInput.schema';
import { sso_providersUncheckedUpdateWithoutSso_domainsInputObjectSchema } from './sso_providersUncheckedUpdateWithoutSso_domainsInput.schema';
import { sso_providersCreateWithoutSso_domainsInputObjectSchema } from './sso_providersCreateWithoutSso_domainsInput.schema';
import { sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema } from './sso_providersUncheckedCreateWithoutSso_domainsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersUpsertWithoutSso_domainsInput> = z
  .object({
    update: z.union([
      z.lazy(() => sso_providersUpdateWithoutSso_domainsInputObjectSchema),
      z.lazy(
        () => sso_providersUncheckedUpdateWithoutSso_domainsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => sso_providersCreateWithoutSso_domainsInputObjectSchema),
      z.lazy(
        () => sso_providersUncheckedCreateWithoutSso_domainsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const sso_providersUpsertWithoutSso_domainsInputObjectSchema = Schema;
