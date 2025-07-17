import { z } from 'zod';
import { mfa_factorsUser_idPhoneCompoundUniqueInputObjectSchema } from './mfa_factorsUser_idPhoneCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    last_challenged_at: z.coerce.date().optional(),
    user_id_phone: z
      .lazy(() => mfa_factorsUser_idPhoneCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const mfa_factorsWhereUniqueInputObjectSchema = Schema;
