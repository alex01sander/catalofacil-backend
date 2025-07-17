import { z } from 'zod';
import { mfa_amr_claimsWhereUniqueInputObjectSchema } from './mfa_amr_claimsWhereUniqueInput.schema';
import { mfa_amr_claimsUpdateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUpdateWithoutSessionsInput.schema';
import { mfa_amr_claimsUncheckedUpdateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUncheckedUpdateWithoutSessionsInput.schema';
import { mfa_amr_claimsCreateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsCreateWithoutSessionsInput.schema';
import { mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema } from './mfa_amr_claimsUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => mfa_amr_claimsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => mfa_amr_claimsUpdateWithoutSessionsInputObjectSchema),
        z.lazy(
          () => mfa_amr_claimsUncheckedUpdateWithoutSessionsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => mfa_amr_claimsCreateWithoutSessionsInputObjectSchema),
        z.lazy(
          () => mfa_amr_claimsUncheckedCreateWithoutSessionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const mfa_amr_claimsUpsertWithWhereUniqueWithoutSessionsInputObjectSchema =
  Schema;
