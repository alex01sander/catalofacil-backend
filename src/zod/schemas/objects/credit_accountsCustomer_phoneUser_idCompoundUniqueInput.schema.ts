import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsCustomer_phoneUser_idCompoundUniqueInput> =
  z
    .object({
      customer_phone: z.string(),
      user_id: z.string(),
    })
    .strict();

export const credit_accountsCustomer_phoneUser_idCompoundUniqueInputObjectSchema =
  Schema;
