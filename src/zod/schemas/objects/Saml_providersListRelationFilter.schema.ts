import { z } from 'zod';
import { saml_providersWhereInputObjectSchema } from './saml_providersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Saml_providersListRelationFilter> = z
  .object({
    every: z.lazy(() => saml_providersWhereInputObjectSchema).optional(),
    some: z.lazy(() => saml_providersWhereInputObjectSchema).optional(),
    none: z.lazy(() => saml_providersWhereInputObjectSchema).optional(),
  })
  .strict();

export const Saml_providersListRelationFilterObjectSchema = Schema;
