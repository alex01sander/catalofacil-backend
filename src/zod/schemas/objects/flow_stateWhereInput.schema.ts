import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { Enumcode_challenge_methodFilterObjectSchema } from './Enumcode_challenge_methodFilter.schema';
import { code_challenge_methodSchema } from '../enums/code_challenge_method.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Saml_relay_statesListRelationFilterObjectSchema } from './Saml_relay_statesListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.flow_stateWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => flow_stateWhereInputObjectSchema),
        z.lazy(() => flow_stateWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => flow_stateWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => flow_stateWhereInputObjectSchema),
        z.lazy(() => flow_stateWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    user_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    auth_code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code_challenge_method: z
      .union([
        z.lazy(() => Enumcode_challenge_methodFilterObjectSchema),
        z.lazy(() => code_challenge_methodSchema),
      ])
      .optional(),
    code_challenge: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    provider_type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    provider_access_token: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    provider_refresh_token: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    authentication_method: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    auth_code_issued_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    saml_relay_states: z
      .lazy(() => Saml_relay_statesListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const flow_stateWhereInputObjectSchema = Schema;
