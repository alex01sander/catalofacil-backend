import { z } from 'zod';
import { flow_stateCreateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateCreateWithoutSaml_relay_statesInput.schema';
import { flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateUncheckedCreateWithoutSaml_relay_statesInput.schema';
import { flow_stateCreateOrConnectWithoutSaml_relay_statesInputObjectSchema } from './flow_stateCreateOrConnectWithoutSaml_relay_statesInput.schema';
import { flow_stateWhereUniqueInputObjectSchema } from './flow_stateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.flow_stateCreateNestedOneWithoutSaml_relay_statesInput> =
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
      connect: z.lazy(() => flow_stateWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const flow_stateCreateNestedOneWithoutSaml_relay_statesInputObjectSchema =
  Schema;
