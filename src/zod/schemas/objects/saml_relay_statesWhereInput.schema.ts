import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema';
import { Flow_stateRelationFilterObjectSchema } from './Flow_stateRelationFilter.schema';
import { flow_stateWhereInputObjectSchema } from './flow_stateWhereInput.schema';
import { Sso_providersRelationFilterObjectSchema } from './Sso_providersRelationFilter.schema';
import { sso_providersWhereInputObjectSchema } from './sso_providersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => saml_relay_statesWhereInputObjectSchema),
        z.lazy(() => saml_relay_statesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => saml_relay_statesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => saml_relay_statesWhereInputObjectSchema),
        z.lazy(() => saml_relay_statesWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    sso_provider_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    request_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    for_email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    redirect_to: z
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
    flow_state_id: z
      .union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    flow_state: z
      .union([
        z.lazy(() => Flow_stateRelationFilterObjectSchema),
        z.lazy(() => flow_stateWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    sso_providers: z
      .union([
        z.lazy(() => Sso_providersRelationFilterObjectSchema),
        z.lazy(() => sso_providersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const saml_relay_statesWhereInputObjectSchema = Schema;
