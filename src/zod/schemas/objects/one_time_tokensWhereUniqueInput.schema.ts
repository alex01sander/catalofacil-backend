import { z } from 'zod';
import { one_time_tokensUser_idToken_typeCompoundUniqueInputObjectSchema } from './one_time_tokensUser_idToken_typeCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    user_id_token_type: z
      .lazy(
        () => one_time_tokensUser_idToken_typeCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const one_time_tokensWhereUniqueInputObjectSchema = Schema;
