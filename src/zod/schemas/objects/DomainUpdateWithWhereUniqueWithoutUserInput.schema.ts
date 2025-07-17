import { z } from 'zod';
import { DomainWhereUniqueInputObjectSchema } from './DomainWhereUniqueInput.schema';
import { DomainUpdateWithoutUserInputObjectSchema } from './DomainUpdateWithoutUserInput.schema';
import { DomainUncheckedUpdateWithoutUserInputObjectSchema } from './DomainUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => DomainWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => DomainUpdateWithoutUserInputObjectSchema),
      z.lazy(() => DomainUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const DomainUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
