import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsersSumAggregateInputType> = z
  .object({
    email_change_confirm_status: z.literal(true).optional(),
  })
  .strict();

export const UsersSumAggregateInputObjectSchema = Schema;
