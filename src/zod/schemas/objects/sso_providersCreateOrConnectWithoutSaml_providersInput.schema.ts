import { z } from 'zod';
import { sso_providersWhereUniqueInputObjectSchema } from './sso_providersWhereUniqueInput.schema';
import { sso_providersCreateWithoutSaml_providersInputObjectSchema } from './sso_providersCreateWithoutSaml_providersInput.schema';
import { sso_providersUncheckedCreateWithoutSaml_providersInputObjectSchema } from './sso_providersUncheckedCreateWithoutSaml_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersCreateOrConnectWithoutSaml_providersInput> =
  z
    .object({
      where: z.lazy(() => sso_providersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => sso_providersCreateWithoutSaml_providersInputObjectSchema),
        z.lazy(
          () =>
            sso_providersUncheckedCreateWithoutSaml_providersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const sso_providersCreateOrConnectWithoutSaml_providersInputObjectSchema =
  Schema;
