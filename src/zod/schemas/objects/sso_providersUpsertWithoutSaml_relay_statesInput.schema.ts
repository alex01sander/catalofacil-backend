import { z } from 'zod';
import { sso_providersUpdateWithoutSaml_relay_statesInputObjectSchema } from './sso_providersUpdateWithoutSaml_relay_statesInput.schema';
import { sso_providersUncheckedUpdateWithoutSaml_relay_statesInputObjectSchema } from './sso_providersUncheckedUpdateWithoutSaml_relay_statesInput.schema';
import { sso_providersCreateWithoutSaml_relay_statesInputObjectSchema } from './sso_providersCreateWithoutSaml_relay_statesInput.schema';
import { sso_providersUncheckedCreateWithoutSaml_relay_statesInputObjectSchema } from './sso_providersUncheckedCreateWithoutSaml_relay_statesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersUpsertWithoutSaml_relay_statesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => sso_providersUpdateWithoutSaml_relay_statesInputObjectSchema,
        ),
        z.lazy(
          () =>
            sso_providersUncheckedUpdateWithoutSaml_relay_statesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => sso_providersCreateWithoutSaml_relay_statesInputObjectSchema,
        ),
        z.lazy(
          () =>
            sso_providersUncheckedCreateWithoutSaml_relay_statesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const sso_providersUpsertWithoutSaml_relay_statesInputObjectSchema =
  Schema;
