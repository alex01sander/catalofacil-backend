import { z } from 'zod';
import { sessionsUpdateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsUpdateWithoutMfa_amr_claimsInput.schema';
import { sessionsUncheckedUpdateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsUncheckedUpdateWithoutMfa_amr_claimsInput.schema';
import { sessionsCreateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsCreateWithoutMfa_amr_claimsInput.schema';
import { sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema } from './sessionsUncheckedCreateWithoutMfa_amr_claimsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.sessionsUpsertWithoutMfa_amr_claimsInput> = z
  .object({
    update: z.union([
      z.lazy(() => sessionsUpdateWithoutMfa_amr_claimsInputObjectSchema),
      z.lazy(
        () => sessionsUncheckedUpdateWithoutMfa_amr_claimsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => sessionsCreateWithoutMfa_amr_claimsInputObjectSchema),
      z.lazy(
        () => sessionsUncheckedCreateWithoutMfa_amr_claimsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const sessionsUpsertWithoutMfa_amr_claimsInputObjectSchema = Schema;
