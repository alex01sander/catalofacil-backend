import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInput> =
  z
    .object({
      session_id: z.string(),
      authentication_method: z.string(),
    })
    .strict();

export const mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInputObjectSchema =
  Schema;
