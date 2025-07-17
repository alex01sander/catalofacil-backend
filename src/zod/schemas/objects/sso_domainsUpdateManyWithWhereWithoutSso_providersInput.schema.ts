import { z } from 'zod';
import { sso_domainsScalarWhereInputObjectSchema } from './sso_domainsScalarWhereInput.schema';
import { sso_domainsUpdateManyMutationInputObjectSchema } from './sso_domainsUpdateManyMutationInput.schema';
import { sso_domainsUncheckedUpdateManyWithoutSso_domainsInputObjectSchema } from './sso_domainsUncheckedUpdateManyWithoutSso_domainsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_domainsUpdateManyWithWhereWithoutSso_providersInput> =
  z
    .object({
      where: z.lazy(() => sso_domainsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => sso_domainsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            sso_domainsUncheckedUpdateManyWithoutSso_domainsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const sso_domainsUpdateManyWithWhereWithoutSso_providersInputObjectSchema =
  Schema;
