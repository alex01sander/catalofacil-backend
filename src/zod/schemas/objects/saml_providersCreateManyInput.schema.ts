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

const Schema: z.ZodType<Prisma.saml_providersCreateManyInput> = z
  .object({
    id: z.string(),
    sso_provider_id: z.string(),
    entity_id: z.string(),
    metadata_xml: z.string(),
    metadata_url: z.string().optional().nullable(),
    attribute_mapping: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    created_at: z.coerce.date().optional().nullable(),
    updated_at: z.coerce.date().optional().nullable(),
    name_id_format: z.string().optional().nullable(),
  })
  .strict();

export const saml_providersCreateManyInputObjectSchema = Schema;
