import { z } from 'zod';
import { saml_relay_statesWhereUniqueInputObjectSchema } from './saml_relay_statesWhereUniqueInput.schema';
import { saml_relay_statesUpdateWithoutFlow_stateInputObjectSchema } from './saml_relay_statesUpdateWithoutFlow_stateInput.schema';
import { saml_relay_statesUncheckedUpdateWithoutFlow_stateInputObjectSchema } from './saml_relay_statesUncheckedUpdateWithoutFlow_stateInput.schema';
import { saml_relay_statesCreateWithoutFlow_stateInputObjectSchema } from './saml_relay_statesCreateWithoutFlow_stateInput.schema';
import { saml_relay_statesUncheckedCreateWithoutFlow_stateInputObjectSchema } from './saml_relay_statesUncheckedCreateWithoutFlow_stateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput> =
  z
    .object({
      where: z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => saml_relay_statesUpdateWithoutFlow_stateInputObjectSchema),
        z.lazy(
          () =>
            saml_relay_statesUncheckedUpdateWithoutFlow_stateInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => saml_relay_statesCreateWithoutFlow_stateInputObjectSchema),
        z.lazy(
          () =>
            saml_relay_statesUncheckedCreateWithoutFlow_stateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInputObjectSchema =
  Schema;
