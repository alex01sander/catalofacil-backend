import { z } from 'zod';
import { sso_providersWhereUniqueInputObjectSchema } from './sso_providersWhereUniqueInput.schema';
import { sso_providersCreateWithoutSaml_relay_statesInputObjectSchema } from './sso_providersCreateWithoutSaml_relay_statesInput.schema';
import { sso_providersUncheckedCreateWithoutSaml_relay_statesInputObjectSchema } from './sso_providersUncheckedCreateWithoutSaml_relay_statesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersCreateOrConnectWithoutSaml_relay_statesInput> =
  z
    .object({
      where: z.lazy(() => sso_providersWhereUniqueInputObjectSchema),
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

export const sso_providersCreateOrConnectWithoutSaml_relay_statesInputObjectSchema =
  Schema;
