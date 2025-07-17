import { z } from 'zod';
import { DomainScalarWhereInputObjectSchema } from './DomainScalarWhereInput.schema';
import { DomainUpdateManyMutationInputObjectSchema } from './DomainUpdateManyMutationInput.schema';
import { DomainUncheckedUpdateManyWithoutDomainsInputObjectSchema } from './DomainUncheckedUpdateManyWithoutDomainsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => DomainScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => DomainUpdateManyMutationInputObjectSchema),
      z.lazy(() => DomainUncheckedUpdateManyWithoutDomainsInputObjectSchema),
    ]),
  })
  .strict();

export const DomainUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
