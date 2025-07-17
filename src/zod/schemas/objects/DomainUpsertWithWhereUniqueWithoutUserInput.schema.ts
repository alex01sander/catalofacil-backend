import { z } from 'zod';
import { DomainWhereUniqueInputObjectSchema } from './DomainWhereUniqueInput.schema';
import { DomainUpdateWithoutUserInputObjectSchema } from './DomainUpdateWithoutUserInput.schema';
import { DomainUncheckedUpdateWithoutUserInputObjectSchema } from './DomainUncheckedUpdateWithoutUserInput.schema';
import { DomainCreateWithoutUserInputObjectSchema } from './DomainCreateWithoutUserInput.schema';
import { DomainUncheckedCreateWithoutUserInputObjectSchema } from './DomainUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => DomainWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => DomainUpdateWithoutUserInputObjectSchema),
      z.lazy(() => DomainUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DomainCreateWithoutUserInputObjectSchema),
      z.lazy(() => DomainUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const DomainUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
