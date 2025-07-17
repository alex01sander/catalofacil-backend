import { z } from 'zod';
import { saml_providersWhereUniqueInputObjectSchema } from './saml_providersWhereUniqueInput.schema';
import { saml_providersUpdateWithoutSso_providersInputObjectSchema } from './saml_providersUpdateWithoutSso_providersInput.schema';
import { saml_providersUncheckedUpdateWithoutSso_providersInputObjectSchema } from './saml_providersUncheckedUpdateWithoutSso_providersInput.schema';
import { saml_providersCreateWithoutSso_providersInputObjectSchema } from './saml_providersCreateWithoutSso_providersInput.schema';
import { saml_providersUncheckedCreateWithoutSso_providersInputObjectSchema } from './saml_providersUncheckedCreateWithoutSso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersUpsertWithWhereUniqueWithoutSso_providersInput> =
  z
    .object({
      where: z.lazy(() => saml_providersWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => saml_providersUpdateWithoutSso_providersInputObjectSchema),
        z.lazy(
          () =>
            saml_providersUncheckedUpdateWithoutSso_providersInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => saml_providersCreateWithoutSso_providersInputObjectSchema),
        z.lazy(
          () =>
            saml_providersUncheckedCreateWithoutSso_providersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saml_providersUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema =
  Schema;
