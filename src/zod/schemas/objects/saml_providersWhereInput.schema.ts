import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Sso_providersRelationFilterObjectSchema } from './Sso_providersRelationFilter.schema';
import { sso_providersWhereInputObjectSchema } from './sso_providersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => saml_providersWhereInputObjectSchema),
        z.lazy(() => saml_providersWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => saml_providersWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => saml_providersWhereInputObjectSchema),
        z.lazy(() => saml_providersWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    sso_provider_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    entity_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    metadata_xml: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    metadata_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    attribute_mapping: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
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
    name_id_format: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
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

export const saml_providersWhereInputObjectSchema = Schema;
