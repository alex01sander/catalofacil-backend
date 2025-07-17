import { z } from 'zod';
import { flow_stateWhereUniqueInputObjectSchema } from './flow_stateWhereUniqueInput.schema';
import { flow_stateCreateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateCreateWithoutSaml_relay_statesInput.schema';
import { flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateUncheckedCreateWithoutSaml_relay_statesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.flow_stateCreateOrConnectWithoutSaml_relay_statesInput> =
  z
    .object({
      where: z.lazy(() => flow_stateWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => flow_stateCreateWithoutSaml_relay_statesInputObjectSchema),
        z.lazy(
          () =>
            flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const flow_stateCreateOrConnectWithoutSaml_relay_statesInputObjectSchema =
  Schema;
