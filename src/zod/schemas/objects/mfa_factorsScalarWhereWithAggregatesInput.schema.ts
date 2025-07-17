import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { Enumfactor_typeWithAggregatesFilterObjectSchema } from './Enumfactor_typeWithAggregatesFilter.schema';
import { factor_typeSchema } from '../enums/factor_type.schema';
import { Enumfactor_statusWithAggregatesFilterObjectSchema } from './Enumfactor_statusWithAggregatesFilter.schema';
import { factor_statusSchema } from '../enums/factor_status.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { UuidNullableWithAggregatesFilterObjectSchema } from './UuidNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.mfa_factorsScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => mfa_factorsScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => mfa_factorsScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => mfa_factorsScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => mfa_factorsScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => mfa_factorsScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    friendly_name: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    factor_type: z
      .union([
        z.lazy(() => Enumfactor_typeWithAggregatesFilterObjectSchema),
        z.lazy(() => factor_typeSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => Enumfactor_statusWithAggregatesFilterObjectSchema),
        z.lazy(() => factor_statusSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
    secret: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    phone: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    last_challenged_at: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    web_authn_credential: z
      .lazy(() => JsonNullableWithAggregatesFilterObjectSchema)
      .optional(),
    web_authn_aaguid: z
      .union([
        z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const mfa_factorsScalarWhereWithAggregatesInputObjectSchema = Schema;
