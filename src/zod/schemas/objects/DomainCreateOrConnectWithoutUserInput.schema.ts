import { z } from 'zod';
import { DomainWhereUniqueInputObjectSchema } from './DomainWhereUniqueInput.schema';
import { DomainCreateWithoutUserInputObjectSchema } from './DomainCreateWithoutUserInput.schema';
import { DomainUncheckedCreateWithoutUserInputObjectSchema } from './DomainUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => DomainWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DomainCreateWithoutUserInputObjectSchema),
      z.lazy(() => DomainUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const DomainCreateOrConnectWithoutUserInputObjectSchema = Schema;
