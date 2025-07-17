import { z } from 'zod';
import { credit_transactionsCreateManyCredit_accountsInputObjectSchema } from './credit_transactionsCreateManyCredit_accountsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.credit_transactionsCreateManyCredit_accountsInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => credit_transactionsCreateManyCredit_accountsInputObjectSchema,
        ),
        z
          .lazy(
            () => credit_transactionsCreateManyCredit_accountsInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const credit_transactionsCreateManyCredit_accountsInputEnvelopeObjectSchema =
  Schema;
