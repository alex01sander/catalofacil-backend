import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.audit_log_entriesCreateInput> = z
  .object({
    instance_id: z.string().optional().nullable(),
    id: z.string(),
    payload: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    created_at: z.coerce.date().optional().nullable(),
    ip_address: z.string().optional(),
  })
  .strict();

export const audit_log_entriesCreateInputObjectSchema = Schema;
