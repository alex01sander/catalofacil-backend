import { z } from 'zod';
import { saml_relay_statesWhereUniqueInputObjectSchema } from './saml_relay_statesWhereUniqueInput.schema';
import { saml_relay_statesUpdateWithoutFlow_stateInputObjectSchema } from './saml_relay_statesUpdateWithoutFlow_stateInput.schema';
import { saml_relay_statesUncheckedUpdateWithoutFlow_stateInputObjectSchema } from './saml_relay_statesUncheckedUpdateWithoutFlow_stateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput> =
  z
    .object({
      where: z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => saml_relay_statesUpdateWithoutFlow_stateInputObjectSchema),
        z.lazy(
          () =>
            saml_relay_statesUncheckedUpdateWithoutFlow_stateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInputObjectSchema =
  Schema;
