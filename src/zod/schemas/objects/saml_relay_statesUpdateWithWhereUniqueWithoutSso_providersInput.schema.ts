import { z } from 'zod';
import { saml_relay_statesWhereUniqueInputObjectSchema } from './saml_relay_statesWhereUniqueInput.schema';
import { saml_relay_statesUpdateWithoutSso_providersInputObjectSchema } from './saml_relay_statesUpdateWithoutSso_providersInput.schema';
import { saml_relay_statesUncheckedUpdateWithoutSso_providersInputObjectSchema } from './saml_relay_statesUncheckedUpdateWithoutSso_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInput> =
  z
    .object({
      where: z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => saml_relay_statesUpdateWithoutSso_providersInputObjectSchema,
        ),
        z.lazy(
          () =>
            saml_relay_statesUncheckedUpdateWithoutSso_providersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saml_relay_statesUpdateWithWhereUniqueWithoutSso_providersInputObjectSchema =
  Schema;
