import { z } from 'zod';
import { DomainCreateWithoutUserInputObjectSchema } from './DomainCreateWithoutUserInput.schema';
import { DomainUncheckedCreateWithoutUserInputObjectSchema } from './DomainUncheckedCreateWithoutUserInput.schema';
import { DomainCreateOrConnectWithoutUserInputObjectSchema } from './DomainCreateOrConnectWithoutUserInput.schema';
import { DomainCreateManyUserInputEnvelopeObjectSchema } from './DomainCreateManyUserInputEnvelope.schema';
import { DomainWhereUniqueInputObjectSchema } from './DomainWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DomainCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DomainCreateWithoutUserInputObjectSchema),
        z.lazy(() => DomainCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => DomainUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => DomainUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DomainCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => DomainCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => DomainCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => DomainWhereUniqueInputObjectSchema),
        z.lazy(() => DomainWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const DomainCreateNestedManyWithoutUserInputObjectSchema = Schema;
