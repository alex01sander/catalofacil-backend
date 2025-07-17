import { z } from 'zod';
import { mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInputObjectSchema } from './mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_amr_claimsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    session_id_authentication_method: z
      .lazy(
        () =>
          mfa_amr_claimsSession_idAuthentication_methodCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const mfa_amr_claimsWhereUniqueInputObjectSchema = Schema;
