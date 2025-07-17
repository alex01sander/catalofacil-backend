import { z } from 'zod';
import { saml_relay_statesWhereInputObjectSchema } from './saml_relay_statesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.Saml_relay_statesListRelationFilter> = z
  .object({
    every: z.lazy(() => saml_relay_statesWhereInputObjectSchema).optional(),
    some: z.lazy(() => saml_relay_statesWhereInputObjectSchema).optional(),
    none: z.lazy(() => saml_relay_statesWhereInputObjectSchema).optional(),
  })
  .strict();

export const Saml_relay_statesListRelationFilterObjectSchema = Schema;
