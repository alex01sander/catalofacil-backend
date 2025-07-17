import { z } from 'zod';
import { sessionsCreateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsCreateWithoutMfa_amr_claimsInput.schema';
import { sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsUncheckedCreateWithoutMfa_amr_claimsInput.schema';
import { sessionsCreateOrConnectWithoutMfa_amr_claimsInputObjectSchema } from './sessionsCreateOrConnectWithoutMfa_amr_claimsInput.schema';
import { sessionsUpsertWithoutMfa_amr_claimsInputObjectSchema } from './sessionsUpsertWithoutMfa_amr_claimsInput.schema';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';
import { sessionsUpdateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsUpdateWithoutMfa_amr_claimsInput.schema';
import { sessionsUncheckedUpdateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsUncheckedUpdateWithoutMfa_amr_claimsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsUpdateOneRequiredWithoutMfa_amr_claimsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => sessionsCreateWithoutMfa_amr_claimsInputObjectSchema),
          z.lazy(
            () => sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => sessionsCreateOrConnectWithoutMfa_amr_claimsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => sessionsUpsertWithoutMfa_amr_claimsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => sessionsWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => sessionsUpdateWithoutMfa_amr_claimsInputObjectSchema),
          z.lazy(
            () => sessionsUncheckedUpdateWithoutMfa_amr_claimsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const sessionsUpdateOneRequiredWithoutMfa_amr_claimsNestedInputObjectSchema =
  Schema;
