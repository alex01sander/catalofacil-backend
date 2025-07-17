import { z } from 'zod';
import { flow_stateUpdateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateUpdateWithoutSaml_relay_statesInput.schema';
import { flow_stateUncheckedUpdateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateUncheckedUpdateWithoutSaml_relay_statesInput.schema';
import { flow_stateCreateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateCreateWithoutSaml_relay_statesInput.schema';
import { flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema } from './flow_stateUncheckedCreateWithoutSaml_relay_statesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.flow_stateUpsertWithoutSaml_relay_statesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => flow_stateUpdateWithoutSaml_relay_statesInputObjectSchema),
        z.lazy(
          () =>
            flow_stateUncheckedUpdateWithoutSaml_relay_statesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => flow_stateCreateWithoutSaml_relay_statesInputObjectSchema),
        z.lazy(
          () =>
            flow_stateUncheckedCreateWithoutSaml_relay_statesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const flow_stateUpsertWithoutSaml_relay_statesInputObjectSchema = Schema;
