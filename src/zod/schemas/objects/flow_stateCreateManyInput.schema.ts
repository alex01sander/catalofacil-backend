import { z } from 'zod';
import { code_challenge_methodSchema } from '../enums/code_challenge_method.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.flow_stateCreateManyInput> = z
  .object({
    id: z.string(),
    user_id: z.string().optional().nullable(),
    auth_code: z.string(),
    code_challenge_method: z.lazy(() => code_challenge_methodSchema),
    code_challenge: z.string(),
    provider_type: z.string(),
    provider_access_token: z.string().optional().nullable(),
    provider_refresh_token: z.string().optional().nullable(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    authentication_method: z.string(),
    auth_code_issued_at: z.coerce.date().optional().nullable(),
  })
  .strict();

export const flow_stateCreateManyInputObjectSchema = Schema;
