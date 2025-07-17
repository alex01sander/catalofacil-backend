import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsUser_idPhoneCompoundUniqueInput> = z
  .object({
    user_id: z.string(),
    phone: z.string(),
  })
  .strict();

export const mfa_factorsUser_idPhoneCompoundUniqueInputObjectSchema = Schema;
