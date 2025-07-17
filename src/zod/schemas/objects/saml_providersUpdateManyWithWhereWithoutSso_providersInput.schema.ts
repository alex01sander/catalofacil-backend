import { z } from 'zod';
import { saml_providersScalarWhereInputObjectSchema } from './saml_providersScalarWhereInput.schema';
import { saml_providersUpdateManyMutationInputObjectSchema } from './saml_providersUpdateManyMutationInput.schema';
import { saml_providersUncheckedUpdateManyWithoutSaml_providersInputObjectSchema } from './saml_providersUncheckedUpdateManyWithoutSaml_providersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersUpdateManyWithWhereWithoutSso_providersInput> =
  z
    .object({
      where: z.lazy(() => saml_providersScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => saml_providersUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            saml_providersUncheckedUpdateManyWithoutSaml_providersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saml_providersUpdateManyWithWhereWithoutSso_providersInputObjectSchema =
  Schema;
