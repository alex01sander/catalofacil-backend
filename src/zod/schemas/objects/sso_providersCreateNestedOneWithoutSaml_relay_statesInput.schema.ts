import { z } from 'zod';
import { sso_providersCreateWithoutSaml_relay_statesInputObjectSchema } from './sso_providersCreateWithoutSaml_relay_statesInput.schema';
import { sso_providersUncheckedCreateWithoutSaml_relay_statesInputObjectSchema } from './sso_providersUncheckedCreateWithoutSaml_relay_statesInput.schema';
import { sso_providersCreateOrConnectWithoutSaml_relay_statesInputObjectSchema } from './sso_providersCreateOrConnectWithoutSaml_relay_statesInput.schema';
import { sso_providersWhereUniqueInputObjectSchema } from './sso_providersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersCreateNestedOneWithoutSaml_relay_statesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => sso_providersCreateWithoutSaml_relay_statesInputObjectSchema,
          ),
          z.lazy(
            () =>
              sso_providersUncheckedCreateWithoutSaml_relay_statesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            sso_providersCreateOrConnectWithoutSaml_relay_statesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => sso_providersWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const sso_providersCreateNestedOneWithoutSaml_relay_statesInputObjectSchema =
  Schema;
