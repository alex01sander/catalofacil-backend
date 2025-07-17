import { z } from 'zod';
import { saml_relay_statesScalarWhereInputObjectSchema } from './saml_relay_statesScalarWhereInput.schema';
import { saml_relay_statesUpdateManyMutationInputObjectSchema } from './saml_relay_statesUpdateManyMutationInput.schema';
import { saml_relay_statesUncheckedUpdateManyWithoutSaml_relay_statesInputObjectSchema } from './saml_relay_statesUncheckedUpdateManyWithoutSaml_relay_statesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput> =
  z
    .object({
      where: z.lazy(() => saml_relay_statesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => saml_relay_statesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            saml_relay_statesUncheckedUpdateManyWithoutSaml_relay_statesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInputObjectSchema =
  Schema;
