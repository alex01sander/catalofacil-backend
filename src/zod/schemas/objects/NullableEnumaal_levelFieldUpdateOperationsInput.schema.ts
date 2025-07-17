import { z } from 'zod';
import { aal_levelSchema } from '../enums/aal_level.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NullableEnumaal_levelFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => aal_levelSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumaal_levelFieldUpdateOperationsInputObjectSchema =
  Schema;
