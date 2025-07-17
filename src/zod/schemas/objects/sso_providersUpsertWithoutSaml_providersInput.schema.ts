import { z } from 'zod';
import { sso_providersUpdateWithoutSaml_providersInputObjectSchema } from './sso_providersUpdateWithoutSaml_providersInput.schema';
import { sso_providersUncheckedUpdateWithoutSaml_providersInputObjectSchema } from './sso_providersUncheckedUpdateWithoutSaml_providersInput.schema';
import { sso_providersCreateWithoutSaml_providersInputObjectSchema } from './sso_providersCreateWithoutSaml_providersInput.schema';
import { sso_providersUncheckedCreateWithoutSaml_providersInputObjectSchema } from './sso_providersUncheckedCreateWithoutSaml_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersUpsertWithoutSaml_providersInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => sso_providersUpdateWithoutSaml_providersInputObjectSchema),
        z.lazy(
          () =>
            sso_providersUncheckedUpdateWithoutSaml_providersInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => sso_providersCreateWithoutSaml_providersInputObjectSchema),
        z.lazy(
          () =>
            sso_providersUncheckedCreateWithoutSaml_providersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const sso_providersUpsertWithoutSaml_providersInputObjectSchema = Schema;
