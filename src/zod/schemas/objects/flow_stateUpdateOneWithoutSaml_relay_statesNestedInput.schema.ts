import { z } from 'zod';
import { flow_stateCreateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateCreateWithoutSaml_relay_statesInput.schema';
import { flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateUncheckedCreateWithoutSaml_relay_statesInput.schema';
import { flow_stateCreateOrConnectWithoutSaml_relay_statesInputObjectSchema } from './flow_stateCreateOrConnectWithoutSaml_relay_statesInput.schema';
import { flow_stateUpsertWithoutSaml_relay_statesInputObjectSchema } from './flow_stateUpsertWithoutSaml_relay_statesInput.schema';
import { flow_stateWhereUniqueInputObjectSchema } from './flow_stateWhereUniqueInput.schema';
import { flow_stateUpdateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateUpdateWithoutSaml_relay_statesInput.schema';
import { flow_stateUncheckedUpdateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateUncheckedUpdateWithoutSaml_relay_statesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.flow_stateUpdateOneWithoutSaml_relay_statesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => flow_stateCreateWithoutSaml_relay_statesInputObjectSchema,
          ),
          z.lazy(
            () =>
              flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            flow_stateCreateOrConnectWithoutSaml_relay_statesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => flow_stateUpsertWithoutSaml_relay_statesInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => flow_stateWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => flow_stateUpdateWithoutSaml_relay_statesInputObjectSchema,
          ),
          z.lazy(
            () =>
              flow_stateUncheckedUpdateWithoutSaml_relay_statesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const flow_stateUpdateOneWithoutSaml_relay_statesNestedInputObjectSchema =
  Schema;
