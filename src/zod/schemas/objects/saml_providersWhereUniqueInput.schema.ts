import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saml_providersWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    entity_id: z.string().optional(),
  })
  .strict();

export const saml_providersWhereUniqueInputObjectSchema = Schema;
