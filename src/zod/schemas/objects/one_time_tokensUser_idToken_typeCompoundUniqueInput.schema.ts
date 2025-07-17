import { z } from 'zod';
import { one_time_token_typeSchema } from '../enums/one_time_token_type.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.one_time_tokensUser_idToken_typeCompoundUniqueInput> =
  z
    .object({
      user_id: z.string(),
      token_type: z.lazy(() => one_time_token_typeSchema),
    })
    .strict();

export const one_time_tokensUser_idToken_typeCompoundUniqueInputObjectSchema =
  Schema;
