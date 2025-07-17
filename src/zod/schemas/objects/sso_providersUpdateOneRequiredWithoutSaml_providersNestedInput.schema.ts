import { z } from 'zod';
import { sso_providersCreateWithoutSaml_providersInputObjectSchema } from './sso_providersCreateWithoutSaml_providersInput.schema';
import { sso_providersUncheckedCreateWithoutSaml_providersInputObjectSchema } from './sso_providersUncheckedCreateWithoutSaml_providersInput.schema';
import { sso_providersCreateOrConnectWithoutSaml_providersInputObjectSchema } from './sso_providersCreateOrConnectWithoutSaml_providersInput.schema';
import { sso_providersUpsertWithoutSaml_providersInputObjectSchema } from './sso_providersUpsertWithoutSaml_providersInput.schema';
import { sso_providersWhereUniqueInputObjectSchema } from './sso_providersWhereUniqueInput.schema';
import { sso_providersUpdateWithoutSaml_providersInputObjectSchema } from './sso_providersUpdateWithoutSaml_providersInput.schema';
import { sso_providersUncheckedUpdateWithoutSaml_providersInputObjectSchema } from './sso_providersUncheckedUpdateWithoutSaml_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersUpdateOneRequiredWithoutSaml_providersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => sso_providersCreateWithoutSaml_providersInputObjectSchema,
          ),
          z.lazy(
            () =>
              sso_providersUncheckedCreateWithoutSaml_providersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            sso_providersCreateOrConnectWithoutSaml_providersInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => sso_providersUpsertWithoutSaml_providersInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => sso_providersWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => sso_providersUpdateWithoutSaml_providersInputObjectSchema,
          ),
          z.lazy(
            () =>
              sso_providersUncheckedUpdateWithoutSaml_providersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const sso_providersUpdateOneRequiredWithoutSaml_providersNestedInputObjectSchema =
  Schema;
