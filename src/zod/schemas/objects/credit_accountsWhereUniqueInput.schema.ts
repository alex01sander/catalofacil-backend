import { z } from 'zod';
import { credit_accountsCustomer_phoneUser_idCompoundUniqueInputObjectSchema } from './credit_accountsCustomer_phoneUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_accountsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    customer_phone_user_id: z
      .lazy(
        () =>
          credit_accountsCustomer_phoneUser_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const credit_accountsWhereUniqueInputObjectSchema = Schema;
