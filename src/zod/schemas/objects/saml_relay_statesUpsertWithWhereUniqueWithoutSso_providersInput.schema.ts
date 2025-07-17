import { z } from 'zod';
import { saml_relay_statesWhereUniqueInputObjectSchema } from './saml_relay_statesWhereUniqueInput.schema';
import { saml_relay_statesUpdateWithoutSso_providersInputObjectSchema } from './saml_relay_statesUpdateWithoutSso_providersInput.schema';
import { saml_relay_statesUncheckedUpdateWithoutSso_providersInputObjectSchema } from './saml_relay_statesUncheckedUpdateWithoutSso_providersInput.schema';
import { saml_relay_statesCreateWithoutSso_providersInputObjectSchema } from './saml_relay_statesCreateWithoutSso_providersInput.schema';
import { saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema } from './saml_relay_statesUncheckedCreateWithoutSso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInput> =
  z
    .object({
      where: z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => saml_relay_statesUpdateWithoutSso_providersInputObjectSchema,
        ),
        z.lazy(
          () =>
            saml_relay_statesUncheckedUpdateWithoutSso_providersInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => saml_relay_statesCreateWithoutSso_providersInputObjectSchema,
        ),
        z.lazy(
          () =>
            saml_relay_statesUncheckedCreateWithoutSso_providersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saml_relay_statesUpsertWithWhereUniqueWithoutSso_providersInputObjectSchema =
  Schema;
