import { z } from 'zod';
import { sessionsWhereUniqueInputObjectSchema } from './sessionsWhereUniqueInput.schema';
import { sessionsCreateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsCreateWithoutMfa_amr_claimsInput.schema';
import { sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsUncheckedCreateWithoutMfa_amr_claimsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsCreateOrConnectWithoutMfa_amr_claimsInput> =
  z
    .object({
      where: z.lazy(() => sessionsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => sessionsCreateWithoutMfa_amr_claimsInputObjectSchema),
        z.lazy(
          () => sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const sessionsCreateOrConnectWithoutMfa_amr_claimsInputObjectSchema =
  Schema;
