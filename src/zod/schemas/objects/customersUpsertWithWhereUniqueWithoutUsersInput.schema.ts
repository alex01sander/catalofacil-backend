import { z } from 'zod';
import { customersWhereUniqueInputObjectSchema } from './customersWhereUniqueInput.schema';
import { customersUpdateWithoutUsersInputObjectSchema } from './customersUpdateWithoutUsersInput.schema';
import { customersUncheckedUpdateWithoutUsersInputObjectSchema } from './customersUncheckedUpdateWithoutUsersInput.schema';
import { customersCreateWithoutUsersInputObjectSchema } from './customersCreateWithoutUsersInput.schema';
import { customersUncheckedCreateWithoutUsersInputObjectSchema } from './customersUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customersUpsertWithWhereUniqueWithoutUsersInput> =
  z
    .object({
      where: z.lazy(() => customersWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => customersUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => customersUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => customersCreateWithoutUsersInputObjectSchema),
        z.lazy(() => customersUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict();

export const customersUpsertWithWhereUniqueWithoutUsersInputObjectSchema =
  Schema;
