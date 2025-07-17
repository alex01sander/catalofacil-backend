import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { UuidNullableWithAggregatesFilterObjectSchema } from './UuidNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_relay_statesScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => saml_relay_statesScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => saml_relay_statesScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => saml_relay_statesScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => saml_relay_statesScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => saml_relay_statesScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      sso_provider_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      request_id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      for_email: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      redirect_to: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      created_at: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      updated_at: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      flow_state_id: z
        .union([
          z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const saml_relay_statesScalarWhereWithAggregatesInputObjectSchema =
  Schema;
