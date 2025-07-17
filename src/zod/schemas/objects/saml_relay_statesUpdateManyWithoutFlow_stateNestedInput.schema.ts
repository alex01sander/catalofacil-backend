import { z } from 'zod';
import { saml_relay_statesCreateWithoutFlow_stateInputObjectSchema } from './saml_relay_statesCreateWithoutFlow_stateInput.schema';
import { saml_relay_statesUncheckedCreateWithoutFlow_stateInputObjectSchema } from './saml_relay_statesUncheckedCreateWithoutFlow_stateInput.schema';
import { saml_relay_statesCreateOrConnectWithoutFlow_stateInputObjectSchema } from './saml_relay_statesCreateOrConnectWithoutFlow_stateInput.schema';
import { saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInputObjectSchema } from './saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInput.schema';
import { saml_relay_statesCreateManyFlow_stateInputEnvelopeObjectSchema } from './saml_relay_statesCreateManyFlow_stateInputEnvelope.schema';
import { saml_relay_statesWhereUniqueInputObjectSchema } from './saml_relay_statesWhereUniqueInput.schema';
import { saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInputObjectSchema } from './saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInput.schema';
import { saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInputObjectSchema } from './saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInput.schema';
import { saml_relay_statesScalarWhereInputObjectSchema } from './saml_relay_statesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesUpdateManyWithoutFlow_stateNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesUpsertWithWhereUniqueWithoutFlow_stateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => saml_relay_statesCreateManyFlow_stateInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema),
          z.lazy(() => saml_relay_statesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesUpdateWithWhereUniqueWithoutFlow_stateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                saml_relay_statesUpdateManyWithWhereWithoutFlow_stateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => saml_relay_statesScalarWhereInputObjectSchema),
          z.lazy(() => saml_relay_statesScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const saml_relay_statesUpdateManyWithoutFlow_stateNestedInputObjectSchema =
  Schema;
