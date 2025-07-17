import { z } from 'zod';
import { sessionsCreateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsCreateWithoutMfa_amr_claimsInput.schema';
import { sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsUncheckedCreateWithoutMfa_amr_claimsInput.schema';
import { sessionsCreateOrConnectWithoutMfa_amr_claimsInputObjectSchema } from './sessionsCreateOrConnectWithoutMfa_amr_claimsInput.schema';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsCreateNestedOneWithoutMfa_amr_claimsInput> =
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
      connect: z.lazy(() => sessionsWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const sessionsCreateNestedOneWithoutMfa_amr_claimsInputObjectSchema =
  Schema;
