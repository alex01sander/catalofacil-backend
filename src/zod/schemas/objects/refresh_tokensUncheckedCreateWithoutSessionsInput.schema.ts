import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.refresh_tokensUncheckedCreateWithoutSessionsInput> =
  z
    .object({
      instance_id: z.string().optional().nullable(),
      id: z.bigint().optional(),
      token: z.string().optional().nullable(),
      user_id: z.string().optional().nullable(),
      revoked: z.boolean().optional().nullable(),
      created_at: z.coerce.date().optional().nullable(),
      updated_at: z.coerce.date().optional().nullable(),
      parent: z.string().optional().nullable(),
    })
    .strict();

export const refresh_tokensUncheckedCreateWithoutSessionsInputObjectSchema =
  Schema;
