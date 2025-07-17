import { z } from 'zod';
import { saml_providersWhereUniqueInputObjectSchema } from './saml_providersWhereUniqueInput.schema';
import { saml_providersCreateWithoutSso_providersInputObjectSchema } from './saml_providersCreateWithoutSso_providersInput.schema';
import { saml_providersUncheckedCreateWithoutSso_providersInputObjectSchema } from './saml_providersUncheckedCreateWithoutSso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersCreateOrConnectWithoutSso_providersInput> =
  z
    .object({
      where: z.lazy(() => saml_providersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => saml_providersCreateWithoutSso_providersInputObjectSchema),
        z.lazy(
          () =>
            saml_providersUncheckedCreateWithoutSso_providersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saml_providersCreateOrConnectWithoutSso_providersInputObjectSchema =
  Schema;
