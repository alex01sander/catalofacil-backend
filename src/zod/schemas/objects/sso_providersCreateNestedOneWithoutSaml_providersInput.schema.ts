import { z } from 'zod';
import { sso_providersCreateWithoutSaml_providersInputObjectSchema } from './sso_providersCreateWithoutSaml_providersInput.schema';
import { sso_providersUncheckedCreateWithoutSaml_providersInputObjectSchema } from './sso_providersUncheckedCreateWithoutSaml_providersInput.schema';
import { sso_providersCreateOrConnectWithoutSaml_providersInputObjectSchema } from './sso_providersCreateOrConnectWithoutSaml_providersInput.schema';
import { sso_providersWhereUniqueInputObjectSchema } from './sso_providersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sso_providersCreateNestedOneWithoutSaml_providersInput> =
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
      connect: z
        .lazy(() => sso_providersWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const sso_providersCreateNestedOneWithoutSaml_providersInputObjectSchema =
  Schema;
