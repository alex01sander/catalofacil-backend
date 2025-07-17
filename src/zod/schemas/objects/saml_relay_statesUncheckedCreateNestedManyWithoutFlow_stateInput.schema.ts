import { z } from 'zod';
import { saml_relay_statesCreateWithoutFlow_stateInputObjectSchema } from './saml_relay_statesCreateWithoutFlow_stateInput.schema';
import { saml_relay_statesUncheckedCreateWithoutFlow_stateInputObjectSchema } from './saml_relay_statesUncheckedCreateWithoutFlow_stateInput.schema';
import { saml_relay_statesCreateOrConnectWithoutFlow_stateInputObjectSchema } from './saml_relay_statesCreateOrConnectWithoutFlow_stateInput.schema';
import { saml_relay_statesCreateManyFlow_stateInputEnvelopeObjectSchema } from './saml_relay_statesCreateManyFlow_stateInputEnvelope.schema';
import { saml_relay_statesWhereUniqueInputObjectSchema } from './saml_relay_statesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesUncheckedCreateNestedManyWithoutFlow_stateInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => saml_relay_statesCreateWithoutFlow_stateInputObjectSchema,
          ),
          z
            .lazy(
              () => saml_relay_statesCreateWithoutFlow_stateInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              saml_relay_statesUncheckedCreateWithoutFlow_stateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesUncheckedCreateWithoutFlow_stateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              saml_relay_statesCreateOrConnectWithoutFlow_stateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesCreateOrConnectWithoutFlow_stateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => saml_relay_statesCreateManyFlow_stateInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const saml_relay_statesUncheckedCreateNestedManyWithoutFlow_stateInputObjectSchema =
  Schema;
